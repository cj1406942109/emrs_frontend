jQuery(document).ready(function() {

    var MedicalRecordList = function() {

        var initTable = function() {

            var table = $('#medical_record_list');
            var goDetail = function() {
                alert('hello');
            }

            // begin first table
            table.dataTable({

                // Internationalisation. For more info refer to http://datatables.net/manual/i18n
                "language": {
                    "aria": {
                        "sortAscending": ": 升序排列",
                        "sortDescending": ": 降序排列"
                    },
                    "emptyTable": "表中没有可用数据",
                    "info": "显示第 _START_ 到 _END_ 条，共 _TOTAL_ 条记录",
                    "infoEmpty": "未找到记录",
                    "infoFiltered": "（从 _MAX_ 条记录中筛选）",
                    "lengthMenu": "显示 _MENU_",
                    "search": "筛选:",
                    "zeroRecords": "未找到匹配记录",
                    "paginate": {
                        "previous": "上一页",
                        "next": "下一页",
                        "last": "末页",
                        "first": "首页"
                    }
                },

                // Or you can use remote translation file
                // "language": {
                //   url: '//cdn.datatables.net/plug-ins/3cfcc339e89/i18n/Portuguese.json'
                // },
                "buttons": [{
                    extend: 'collection',
                    className: 'btn green btn-outline',
                    text: '工具 <i class="fa fa-angle-down"></i>',
                    buttons: [
                        { extend: 'print', className: 'gray', text: '<i class="fa fa-print"></i> 打印' },
                        { extend: 'pdf', className: 'gray', text: '<i class="fa fa-file-pdf-o"></i> 保存为PDF' },
                        { extend: 'csv', className: 'gray', text: '<i class="fa fa-file-code-o"></i> 导出到CSV' },
                        { extend: 'excel', className: 'gray', text: '<i class="fa fa-file-excel-o"></i> 导出到EXCEL' },
                    ]
                }, ],

                // Uncomment below line("dom" parameter) to fix the dropdown overflow issue in the datatable cells. The default datatable layout
                // setup uses scrollable div(table-scrollable) with overflow:auto to enable vertical scroll(see: assets/global/plugins/datatables/plugins/bootstrap/dataTables.bootstrap.js). 
                // So when dropdowns used the scrollable div should be removed. 
                //"dom": "<'row'<'col-md-6 col-sm-12'l><'col-md-6 col-sm-12'f>r>t<'row'<'col-md-5 col-sm-12'i><'col-md-7 col-sm-12'p>>",

                "bStateSave": true, // save datatable state(pagination, sort, etc) in cookie.

                "lengthMenu": [
                    [20, 50, 100, -1],
                    [20, 50, 100, "全部"] // change per page values here
                ],
                // set the initial value
                "pageLength": 20,
                "pagingType": "bootstrap_full_number",
                "columnDefs": [{ // set default column settings
                        "targets": -1,
                        "data": null,
                        "searchable": false,
                        'orderable': false,
                        "defaultContent": ``,
                    },
                    // {
                    //     "targets": 0,
                    //     "data": null,
                    //     "searchable": false,
                    //     'orderable': false,
                    //     "defaultContent": `<label class="mt-checkbox mt-checkbox-single mt-checkbox-outline">
                    //                             <input type="checkbox" class="checkboxes" value="1" />
                    //                             <span></span>
                    //                         </label>`
                    // }, 
                    {
                        "render": function(data, type, row) {
                            var htmlContent = "<div class='btn-group'>" +
                                "<button class='btn btn-xs blue dropdown-toggle' type='button' data-toggle='dropdown' aria-expanded='false'> 操作<i class='fa fa-angle-down'></i></button>" +
                                "<ul class='dropdown-menu pull-right' role='menu'>" +
                                "<li data-record-id=" + data + " class='godetail'><a href='javascript:;'><i class='icon-info'></i> 查看详情 </a></li>" +
                                "<li class='divider'></li>" +
                                "<li><a href='javascript:;' style='color:#ED6B75' data-toggle='confirmation'><i class='icon-trash' style='color:#ED6B75'></i> 删除记录 </a></li>" +
                                "</ul></div>";
                            return htmlContent;
                        },
                        "targets": [-1]
                    }
                ],
                "order": [
                    [1, "asc"]
                ], // set first column as a default sort by asc
                "ajax": {
                    url: "http://192.168.10.248:8080/Emrs/getAllRecords",
                    type: "POST"
                },
                "columns": [
                    { "data": "name" },
                    { "data": "gender" },
                    { "data": "birthday" },
                    { "data": "admission_num" },
                    { "data": "bed_num" },
                    { "data": "medical_card_number" },
                    { "data": "doctor" },
                    { "data": "telephone" },
                    { "data": "record_id" },
                ],

                // "dom": "<'row' <'col-md-12'B>><'row'<'col-md-6 col-sm-12'l><'col-md-6 col-sm-12'f>r><'table-scrollable't><'row'<'col-md-5 col-sm-12'i><'col-md-7 col-sm-12'p>>", // horizobtal scrollable datatable

                // Uncomment below line("dom" parameter) to fix the dropdown overflow issue in the datatable cells. The default datatable layout
                // setup uses scrollable div(table-scrollable) with overflow:auto to enable vertical scroll(see: assets/global/plugins/datatables/plugins/bootstrap/dataTables.bootstrap.js). 
                // So when dropdowns used the scrollable div should be removed. 
                //"dom": "<'row' <'col-md-12'T>><'row'<'col-md-6 col-sm-12'l><'col-md-6 col-sm-12'f>r>t<'row'<'col-md-5 col-sm-12'i><'col-md-7 col-sm-12'p>>",
            });

            // table.find('.group-checkable').change(function() {
            //     var set = jQuery(this).attr("data-set");
            //     var checked = jQuery(this).is(":checked");
            //     jQuery(set).each(function() {
            //         if (checked) {
            //             $(this).prop("checked", true);
            //             $(this).parents('tr').addClass("active");
            //         } else {
            //             $(this).prop("checked", false);
            //             $(this).parents('tr').removeClass("active");
            //         }
            //     });
            // });

            table.on('change', 'tbody tr .checkboxes', function() {
                $(this).parents('tr').toggleClass("active");
                UIConfirmations.init();
            });

            table.on('click', '.godetail', function() {
                sessionStorage.setItem('record_id', $(this).attr('data-record-id'));
                location.href = "emrs_medical_record_detail.html";
            });
            // 初始化确定弹窗
            table.on('click', 'button', function() {
                UIConfirmations.init();
                // var data = table.row($(this).parents('tr')).data();
                // alert(data[0] + "'s salary is: " + data[5]);
            });
        }

        return {

            //main function to initiate the module
            init: function() {
                if (!jQuery().dataTable) {
                    return;
                }

                initTable();
            }

        };

    }();

    var UIConfirmations = function() {

        var initConfirmation = function() {
            $('[data-toggle="confirmation"]').confirmation({
                title: '是否删除该记录？',
                btnCancelClass: "btn-sm default",
                btnOkClass: "btn-sm red",
                popout: "true",
                btnOkLabel: "确定",
                btnCancelLabel: "取消",
                onConfirm: function() {
                    alert('delete');
                }
            });
        }


        return {
            //main function to initiate the module
            init: function() {

                initConfirmation();

            }

        };

    }();

    MedicalRecordList.init();

});