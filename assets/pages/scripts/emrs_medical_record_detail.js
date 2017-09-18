jQuery(document).ready(function() {

    var app = new Vue({
        el: '#app',
        data: {
            mr: {
                basic_info: {},
                history_of_present_illness: {},
                anamnesis: {},
                risk_factors: {},
                family_history: [],
                physical_examination: {},
                routine_examination: {},
                special_examination: {},
                admission_diagnosis: {},
                discharge_diagnosis: {}
            },
            pageData: {
                basic_info: {
                    patient_type_list: [
                        { id: '0', text: '门诊病人' },
                        { id: '1', text: '住院病人' }
                    ],
                    doctor_list: [
                        { id: '6c0222ede7f54cada717a9abfb372239', text: '张三' },
                        { id: '6c0222ede7f54cada717a9abfb372230', text: '李四' }
                    ],
                    recorder_list: [
                        { id: '6c0222ede7f54cada717a9abfb372231', text: '小明' },
                        { id: '6c0222ede7f54cada717a9abfb372232', text: '小华' }
                    ],
                    nationality_list: [
                        { id: '汉族', text: '汉族' },
                        { id: '壮族', text: '壮族' },
                        { id: '满族', text: '满族' },
                        { id: '回族', text: '回族' },
                        { id: '苗族', text: '苗族' },
                        { id: '维吾尔族', text: '维吾尔族' },
                        { id: '土家族', text: '土家族' },
                        { id: '彝族', text: '彝族' },
                        { id: '蒙古族', text: '蒙古族' },
                        { id: '藏族', text: '藏族' },
                        { id: '布依族', text: '布依族' },
                        { id: '侗族', text: '侗族' },
                        { id: '瑶族', text: '瑶族' },
                        { id: '朝鲜族', text: '朝鲜族' },
                        { id: '白族', text: '白族' },
                        { id: '哈尼族', text: '哈尼族' },
                        { id: '哈萨克族', text: '哈萨克族' },
                        { id: '黎族', text: '黎族' },
                        { id: '傣族', text: '傣族' },
                        { id: '畲族', text: '畲族' },
                        { id: '傈僳族', text: '傈僳族' },
                        { id: '仡佬族', text: '仡佬族' },
                        { id: '东乡族', text: '东乡族' },
                        { id: '高山族', text: '高山族' },
                        { id: '拉祜族', text: '拉祜族' },
                        { id: '水族', text: '水族' },
                        { id: '佤族', text: '佤族' },
                        { id: '纳西族', text: '纳西族' },
                        { id: '羌族', text: '羌族' },
                        { id: '土族', text: '土族' },
                        { id: '仫佬族', text: '仫佬族' },
                        { id: '锡伯族', text: '锡伯族' },
                        { id: '柯尔克孜族', text: '柯尔克孜族' },
                        { id: '达斡尔族', text: '达斡尔族' },
                        { id: '景颇族', text: '景颇族' },
                        { id: '毛南族', text: '毛南族' },
                        { id: '撒拉族', text: '撒拉族' },
                        { id: '布朗族', text: '布朗族' },
                        { id: '塔吉克族', text: '塔吉克族' },
                        { id: '阿昌族', text: '阿昌族' },
                        { id: '普米族', text: '普米族' },
                        { id: '鄂温克族', text: '鄂温克族' },
                        { id: '怒族', text: '怒族' },
                        { id: '京族', text: '京族' },
                        { id: '基诺族', text: '基诺族' },
                        { id: '德昂族', text: '德昂族' },
                        { id: '保安族', text: '保安族' },
                        { id: '俄罗斯族', text: '俄罗斯族' },
                        { id: '裕固族', text: '裕固族' },
                        { id: '乌孜别克族', text: '乌孜别克族' },
                        { id: '门巴族', text: '门巴族' },
                        { id: '鄂伦春族', text: '鄂伦春族' },
                        { id: '独龙族', text: '独龙族' },
                        { id: '塔塔尔族', text: '塔塔尔族' },
                        { id: '赫哲族', text: '赫哲族' },
                        { id: '珞巴族', text: '珞巴族' }
                    ],
                    profession_list: [
                        { id: '干部', text: '干部' },
                        { id: '知识分子', text: '知识分子' },
                        { id: '工', text: '工' },
                        { id: '农', text: '农' },
                        { id: '军', text: '军' },
                        { id: '教师', text: '教师' },
                        { id: '医', text: '医' },
                        { id: '商', text: '商' },
                        { id: '个体', text: '个体' },
                        { id: '退休', text: '退休' },
                        { id: '司机', text: '司机' },
                        { id: '营业员', text: '营业员' },
                        { id: '警', text: '警' },
                        { id: '学生', text: '学生' },
                        { id: '运动员', text: '运动员' },
                        { id: '其他', text: '其他' }
                    ]
                },
                history_of_present_illness: {
                    care_cause_list: [
                        { id: '1', text: '胸痛' },
                        { id: '2', text: '胸闷' },
                        { id: '3', text: '呼吸困难' },
                        { id: '4', text: '心悸' },
                        { id: '5', text: '心电图异常' },
                        { id: '6', text: '其他' },
                    ],
                    onset_time_list: [
                        { id: '1', text: '上午' },
                        { id: '2', text: '中午' },
                        { id: '3', text: '下午' },
                        { id: '4', text: '晚上' },
                        { id: '5', text: '其他' }
                    ],
                    disease_body_part_name_list: [
                        { id: '1', text: '前胸' },
                        { id: '2', text: '整个胸部' },
                        { id: '3', text: '后背' },
                        { id: '4', text: '胸骨后' },
                        { id: '5', text: '心前区' },
                        { id: '6', text: '剑突下' },
                        { id: '7', text: '咽颈部' },
                        { id: '8', text: '下颌部' },
                        { id: '9', text: '腹部' },
                        { id: '10', text: '其他' }
                    ],
                    disease_quality_of_pain_list: [
                        { id: '1', text: '紧缩感' },
                        { id: '2', text: '刀割' },
                        { id: '3', text: '烧灼' },
                        { id: '4', text: '闷痛' },
                        { id: '5', text: '针刺样' },
                        { id: '6', text: '胀痛' },
                        { id: '7', text: '隐痛' },
                        { id: '8', text: '梗塞感' },
                        { id: '9', text: '绞痛' },
                        { id: '10', text: '不适' },
                        { id: '11', text: '压迫感' },
                        { id: '12', text: '压榨样' },
                        { id: '13', text: '其他' }
                    ],
                    disease_duration_of_pain_list: [
                        { id: '1', text: '<1min' },
                        { id: '2', text: '<5min' },
                        { id: '3', text: '<10min' },
                        { id: '4', text: '<20min' },
                        { id: '5', text: '>1h' },
                        { id: '6', text: '其他' }
                    ],
                    disease_pain_degree_list: [
                        { id: '1', text: '轻' },
                        { id: '2', text: '中' },
                        { id: '3', text: '重' }
                    ],
                    relieving_factors_list: [
                        { id: '1', text: '休息' },
                        { id: '2', text: '舌下含化合物' },
                        { id: '3', text: '硝酸酯类药物' },
                        { id: '4', text: '不缓解' },
                        { id: '5', text: '其他' }
                    ],
                    precipitating_factors_list: [
                        { id: '1', text: '无' },
                        { id: '2', text: '上感' },
                        { id: '3', text: '体力活动轻' },
                        { id: '4', text: '体力活动中' },
                        { id: '5', text: '体力活动重' },
                        { id: '6', text: '情绪' },
                        { id: '7', text: '饱餐' },
                        { id: '8', text: '吸烟' },
                        { id: '9', text: '排便' },
                        { id: '10', text: '气候变化' },
                        { id: '11', text: '其他' }
                    ],
                    radiation_sites_list: [
                        { id: '1', text: '背部' },
                        { id: '2', text: '左肩' },
                        { id: '3', text: '左臂内侧' },
                        { id: '4', text: '颈咽部' },
                        { id: '5', text: '上腹部' },
                        { id: '6', text: '下颔部' },
                        { id: '7', text: '其他' }
                    ],
                    simultaneous_phenomena_list: [
                        { id: '1', text: '无' },
                        { id: '2', text: '大汗' },
                        { id: '3', text: '咯血' },
                        { id: '4', text: '烦躁' },
                        { id: '5', text: '上腹胀' },
                        { id: '6', text: '恶心' },
                        { id: '7', text: '呕吐' },
                        { id: '8', text: '气促' },
                        { id: '9', text: '黑朦' },
                        { id: '10', text: '晕厥' },
                        { id: '11', text: '心悸' },
                        { id: '12', text: '乏力' },
                        { id: '13', text: '头晕' },
                        { id: '14', text: '头昏' },
                        { id: '15', text: '肢体麻木' },
                        { id: '16', text: '意识障碍' },
                        { id: '17', text: '呼吸困难' },
                        { id: '18', text: '咳嗽' },
                        { id: '19', text: '吐痰' },
                        { id: '20', text: '濒死感' },
                        { id: '21', text: '其他' }
                    ],
                    angina_pectoris_ccs_list: [
                        { id: 'I', text: 'I' },
                        { id: 'II', text: 'II' },
                        { id: 'III', text: 'III' },
                        { id: 'IV', text: 'IV' }
                    ]

                },
                risk_factors: {
                    cigrette_type_list: [
                        { id: '1', text: '纸烟' },
                        { id: '2', text: '雪茄' },
                        { id: '3', text: '水烟' },
                        { id: '4', text: '鼻烟' },
                        { id: '5', text: '其他' }
                    ],
                    wine_type_list: [
                        { id: '1', text: '白酒' },
                        { id: '2', text: '红酒' },
                        { id: '3', text: '啤酒' },
                        { id: '4', text: '威士忌' },
                        { id: '5', text: '其他' }
                    ],
                    drinking_amount_list: [
                        { id: '1', text: '<1500ml' },
                        { id: '2', text: '1500~1700ml' },
                        { id: '3', text: '>1700ml' }
                    ],
                    paddy_potato_list: [
                        { id: '1', text: '<250g' },
                        { id: '2', text: '250~400g' },
                        { id: '3', text: '>400g' }
                    ],
                    grain_mixed_beans_list: [
                        { id: '1', text: '<50g' },
                        { id: '2', text: '50~150g' },
                        { id: '3', text: '>150g' }
                    ],
                    potato_list: [
                        { id: '1', text: '<50g' },
                        { id: '2', text: '50~100g' },
                        { id: '3', text: '>100g' }
                    ],
                    vegetables_list: [
                        { id: '1', text: '<300g' },
                        { id: '2', text: '300~500g' },
                        { id: '3', text: '>500g' }
                    ],
                    fruits_list: [
                        { id: '1', text: '<200g' },
                        { id: '2', text: '200~350g' },
                        { id: '3', text: '>350g' }
                    ],
                    livestock_meat_list: [
                        { id: '1', text: '<40g' },
                        { id: '2', text: '40~75g' },
                        { id: '3', text: '>75g' }
                    ],
                    aquatic_products_list: [
                        { id: '1', text: '<40g' },
                        { id: '2', text: '40~75g' },
                        { id: '3', text: '>75g' }
                    ],
                    eggs_list: [
                        { id: '1', text: '<40g' },
                        { id: '2', text: '40~50g' },
                        { id: '3', text: '>50g' }
                    ],
                    milk_products_list: [
                        { id: '1', text: '<300g' },
                        { id: '2', text: '300~400g' },
                        { id: '3', text: '>400g' }
                    ],
                    soybeans_nuts_list: [
                        { id: '1', text: '<25g' },
                        { id: '2', text: '25~35g' },
                        { id: '3', text: '>35g' }
                    ],
                    salt_list: [
                        { id: '1', text: '<6g' },
                        { id: '2', text: '6~10g' },
                        { id: '3', text: '10~15g' },
                        { id: '4', text: '>15g' }
                    ],
                    sugar_list: [
                        { id: '1', text: '<25g' },
                        { id: '2', text: '25~50g' },
                        { id: '3', text: '>50g' }
                    ],
                    oil_list: [
                        { id: '1', text: '<25g' },
                        { id: '2', text: '25~30g' },
                        { id: '3', text: '>30g' }
                    ],
                    blood_type_list: [
                        { id: '1', text: 'A' },
                        { id: '2', text: 'B' },
                        { id: '3', text: 'O' },
                        { id: '4', text: 'AB' }
                    ],
                    exercise_type_list: [
                        { id: '1', text: '缺乏' },
                        { id: '2', text: '2~4次每周' },
                        { id: '3', text: '每周>=5次' }
                    ],
                    exercise_duration_list: [
                        { id: '1', text: '<10min' },
                        { id: '2', text: '10~30min' },
                        { id: '3', text: '>30min' }
                    ],
                    exercise_mode_list: [
                        { id: '1', text: '快走' },
                        { id: '2', text: '慢跑' },
                        { id: '3', text: '其他' }
                    ],
                },
                anamnesis: {
                    lipid_abnormality_type_list: [
                        { id: '1', text: '高TC' },
                        { id: '2', text: '高TG' },
                        { id: '3', text: '高TC且高TG' }
                    ],
                    dysglycemia_type_list: [
                        { id: '1', text: '空腹血糖受损' },
                        { id: '2', text: '糖耐量异常' },
                        { id: '3', text: '2型糖尿病' }
                    ],
                    diabetes_mellitus_treatment_method_list: [
                        { id: '1', text: '饮食' },
                        { id: '2', text: '运动' },
                        { id: '3', text: '口服药' },
                        { id: '4', text: '胰岛素' }
                    ],
                    old_myocardial_infarction_location_list: [
                        { id: '1', text: '广泛前壁' },
                        { id: '2', text: '前壁' },
                        { id: '3', text: '前间壁' },
                        { id: '4', text: '侧壁' },
                        { id: '5', text: '高侧壁' },
                        { id: '6', text: '下壁' },
                        { id: '7', text: '其他' }
                    ],
                    other_heart_disease_type_list: [
                        { id: '1', text: '高血压' },
                        { id: '2', text: '肥厚型心肌病' },
                        { id: '3', text: '扩张型心肌病' },
                        { id: '4', text: '限制型心肌病' },
                        { id: '5', text: '心脏瓣膜病' },
                        { id: '6', text: '风湿性心脏病' },
                        { id: '7', text: '肺源性心脏病' },
                        { id: '8', text: '其他' }
                    ],
                    deep_venous_thrombosis_inducement_list: [
                        { id: '1', text: '瘫痪、不完全瘫痪' },
                        { id: '2', text: '近期石膏固定' },
                        { id: '3', text: '近期卧床大于3天' },
                        { id: '4', text: '12周内已行全麻或局麻的大手术' }
                    ],
                    deep_venous_thrombosis_symptom_list: [
                        { id: '1', text: '沿深静脉走形的局部疼痛' },
                        { id: '2', text: '全下肢水肿' },
                        { id: '3', text: '与无症状侧小腿相比，出现症状一侧小腿水肿大于3cm（胫骨粗隆下10cm测量）' },
                        { id: '4', text: '有症状腿部的凹陷型水肿' },
                        { id: '5', text: '浅静脉侧枝循环（无静脉曲张情况下）' }
                    ],
                    deep_venous_thrombosis_diagnosis_result_list: [
                        { id: '1', text: '确诊为DVT' },
                        { id: '2', text: 'DVT可能性较大' },
                        { id: '3', text: 'DVT可能性与PE相同' },
                        { id: '4', text: 'DVT可能性较小' }
                    ],
                    old_ischemic_stroke_type_name_list: [
                        { id: '1', text: 'TIA' },
                        { id: '2', text: '脑梗塞' },
                        { id: '3', text: '脑血栓' },
                        { id: '4', text: '腔梗' }
                    ],
                    vascula_diseases_type_list: [
                        { id: '1', text: 'PAD' },
                        { id: '2', text: '主动脉瓣性疾病' },
                        { id: '3', text: '肺动脉栓塞' }
                    ],
                    hemorrhage_type_name_list: [
                        { id: '1', text: '颅内肿瘤' },
                        { id: '2', text: '主动脉夹层' },
                        { id: '3', text: '近期内脏出血' },
                        { id: '4', text: '创伤史和外科大手术' }
                    ],
                    bleeding_cause_list: [
                        { id: '1', text: '出血性中风' },
                        { id: '2', text: '消化道出血' },
                        { id: '3', text: '胃溃疡史' },
                        { id: '4', text: '严重胃炎' },
                        { id: '5', text: '痔疮' },
                        { id: '6', text: '牙龈出血' },
                        { id: '7', text: '皮肤出血' },
                        { id: '8', text: '泌尿系统' },
                        { id: '9', text: '生殖系统' }
                    ],
                },
                family_history: {
                    disease_name_list: [
                        { id: '1', text: '早发冠心病' },
                        { id: '2', text: '心肌梗塞' },
                        { id: '3', text: '缺血性脑卒中' },
                        { id: '4', text: '出血性脑卒中' },
                        { id: '5', text: '猝死' }
                    ],
                    onset_member_list: [
                        { id: '1', text: '祖父' },
                        { id: '2', text: '祖母' },
                        { id: '3', text: '外祖父' },
                        { id: '4', text: '外祖母' },
                        { id: '5', text: '母亲' },
                        { id: '6', text: '父亲' },
                        { id: '7', text: '姐妹' },
                        { id: '8', text: '兄弟' },
                        { id: '9', text: '儿子' },
                        { id: '10', text: '女儿' }
                    ],
                    gender_list: [
                        { id: '0', text: '男' },
                        { id: '1', text: '女' },
                    ],
                    premature_chd_type_list: [
                        { id: '1', text: '隐匿型冠心病' },
                        { id: '2', text: '劳力性心绞痛' },
                        { id: '3', text: '不稳定型心绞痛' },
                        { id: '4', text: '心肌梗死' },
                        { id: '5', text: '缺血性心肌病' },
                        { id: '6', text: '冠心病猝死' }
                    ],
                    sudden_death_etiologie_list: [
                        { id: '1', text: '冠心病' },
                        { id: '2', text: '心肌病' },
                        { id: '3', text: '遗传性心脏分子通道病' },
                        { id: '4', text: '其他' }
                    ],
                    disease_name_list: [
                        { id: '1', text: '早发冠心病' },
                        { id: '2', text: '心肌梗塞' },
                        { id: '3', text: '缺血性脑卒中' },
                        { id: '4', text: '出血性脑卒中' },
                        { id: '5', text: '猝死' }
                    ],
                },
                physical_examination: {
                    lung_wet_rales_range_list: [
                        { id: '1', text: '1/2肺野以上' },
                        { id: '2', text: '1/2肺野以下' }
                    ],
                    cardiac_rhythm_list: [
                        { id: '1', text: '齐' },
                        { id: '2', text: '早搏' },
                        { id: '3', text: '绝对不齐' },
                        { id: '4', text: '不齐' }
                    ],
                    heart_sound_S1_result_list: [
                        { id: '1', text: '正常' },
                        { id: '2', text: '减弱' },
                        { id: '3', text: '明显弱' },
                        { id: '4', text: '强弱不等' }
                    ],
                    Killip_class_list: [
                        { id: '1', text: 'I' },
                        { id: '2', text: 'II' },
                        { id: '3', text: 'III' },
                        { id: '4', text: 'IV' }
                    ],
                    ear_lobe_longitudinal_crack_part_list: [
                        { id: '1', text: '左耳垂' },
                        { id: '2', text: '右耳垂' }
                    ],
                    skin_yellow_pigment_tumor_part_list: [
                        { id: '1', text: '左眼角' },
                        { id: '2', text: '右眼角' },
                        { id: '3', text: '左肘部' },
                        { id: '4', text: '右肘部' },
                        { id: '5', text: '左踝部' },
                        { id: '6', text: '右踝部' }
                    ],
                    alopecia_part_list: [
                        { id: '1', text: '前额' },
                        { id: '2', text: '头顶' }
                    ]
                },
                routine_examination: {
                    is_INR_stable_list: [
                        { id: '1', text: '稳定' },
                        { id: '0', text: '不稳定' }
                    ]
                },
                special_examination: {
                    lead_list: [
                        { id: '1', text: 'I' },
                        { id: '2', text: 'II' },
                        { id: '3', text: 'III' },
                        { id: '4', text: 'aVR' },
                        { id: '5', text: 'aVL' },
                        { id: '6', text: 'aVF' },
                        { id: '7', text: 'V1' },
                        { id: '8', text: 'V2' },
                        { id: '9', text: 'V3' },
                        { id: '10', text: 'V4' },
                        { id: '11', text: 'V5' },
                        { id: '12', text: 'V6' },
                        { id: '13', text: 'V7' },
                        { id: '14', text: 'V8' },
                        { id: '15', text: 'V9' }
                    ],
                    arrhythmia_type_list: [
                        { id: '1', text: '室性期前收缩' },
                        { id: '2', text: '室速' },
                        { id: '3', text: '室颤' },
                        { id: '4', text: '房性期前收缩' },
                        { id: '5', text: '房扑' },
                        { id: '6', text: '房颤' },
                        { id: '7', text: '交界性期前收缩' },
                        { id: '8', text: '室上速' },
                        { id: '9', text: '房室传导阻滞' },
                        { id: '10', text: '束支传导阻滞' },
                        { id: '11', text: '其他' }
                    ],
                    ecg_waveform_list: [
                        { id: '1', text: '高尖' },
                        { id: '2', text: '低平' },
                        { id: '3', text: '双向改变' },
                        { id: '4', text: '深倒置' },
                        { id: '5', text: '浅倒置' },
                    ],
                    exercise_ecg_result_list: [
                        { id: '1', text: '阴性' },
                        { id: '2', text: '不能评价' },
                        { id: '3', text: '可疑阳性' },
                        { id: '4', text: '阳性' },
                    ],
                    ucg_part_list: [
                        { id: '1', text: '前壁' },
                        { id: '2', text: '后壁' },
                        { id: '3', text: '下壁' },
                        { id: '4', text: '心尖部' }
                    ],
                    pci_type_list: [
                        { id: '1', text: '直接PCI' },
                        { id: '2', text: '择期PCI' },
                        { id: '3', text: '溶栓失败后PCI' },
                        { id: '4', text: '溶栓成功后PCI' },
                        { id: '5', text: '易化PCI' },
                    ],
                    contrast_medium_list: [
                        { id: '1', text: '优维显' },
                        { id: '2', text: '碘必乐' },
                        { id: '3', text: '威视派克' },
                        { id: '4', text: '欧乃派克' },
                        { id: '5', text: '其他' },
                    ],
                    coronary_distribution_type_list: [
                        { id: '1', text: '左优势型' },
                        { id: '2', text: '右优势型' },
                        { id: '3', text: '均衡型' }
                    ],
                    pci_path_list: [
                        { id: '1', text: '股动脉' },
                        { id: '2', text: '桡动脉' },
                        { id: '3', text: '肱动脉' }
                    ],
                    segmental_lesions_num_list: [
                        { id: '1', text: '1' },
                        { id: '2', text: '2' },
                        { id: '3', text: '3' },
                        { id: '4', text: '4' },
                        { id: '5', text: '5' },
                        { id: '6', text: '6' },
                        { id: '7', text: '7' },
                        { id: '8', text: '8' },
                        { id: '9', text: '9' },
                        { id: '10', text: '10' },
                        { id: '11', text: '11' },
                        { id: '12', text: '12' },
                        { id: '13', text: '13' },
                        { id: '14', text: '14' },
                        { id: '15', text: '15' },
                        { id: '16', text: '16' },
                        { id: '17', text: '17' },
                        { id: '18', text: '18' },
                        { id: '19', text: '19' },
                        { id: '20', text: '20' },
                        { id: '21', text: '21' },
                        { id: '22', text: '22' },
                        { id: '23', text: '23' }
                    ],
                    segmental_lesions_shape_list: [
                        { id: '1', text: '偏心型' },
                        { id: '2', text: '向心型' }
                    ],
                    is_calcification_list: [
                        { id: '0', text: '无' },
                        { id: '1', text: '有' }
                    ],
                    is_ostial_lesion_list: [
                        { id: '0', text: '否' },
                        { id: '1', text: '是' }
                    ],
                    is_thrombus_list: [
                        { id: '0', text: '无' },
                        { id: '1', text: '有' }
                    ],
                    TIMI_grade_list: [
                        { id: '0', text: '0' },
                        { id: '1', text: 'I' },
                        { id: '2', text: 'II' },
                        { id: '3', text: 'III' }
                    ],
                    kinds_of_lesions_list: [
                        { id: 'A', text: 'A型' },
                        { id: 'B', text: 'B型' },
                        { id: 'C', text: 'C型' },
                    ]
                }
            },
            tab_status: {
                tab_1: true,
                tab_2: false,
                tab_3: false,
                tab_4: false,
                tab_5: false,
                tab_6: false,
                tab_7: false,
                tab_8: false,
                tab_9: false
            }
        },
        methods: {
            key2value: function(array, key) {
                var text = false;
                for (var i = 0; i < array.length; i++) {
                    if (array[i].id == key) {
                        text = array[i].text;
                        break;
                    }
                }
                return text;
            },
            keyString2valueString: function(array, keyString) {
                var key2value = this.key2value;
                var keyArray = keyString.split(',');
                var valueArray = [];
                keyArray.forEach(function(key) {
                    var value = key2value(array, key);
                    if (value) {
                        valueArray.push(value);
                    }
                })
                return valueArray.toString();
            }
        },
        filters: {
            boolTransform1(value) {
                if (value == '1') {
                    return '是';
                } else if (value == '0') {
                    return '否';
                } else {
                    return '未填写';
                }
            },
            boolTransform2(value) {
                if (value == '1') {
                    return '有';
                } else if (value == '0') {
                    return '无';
                } else {
                    return '未填写';
                }
            },
            boolTransform3(value) {
                if (value == '1') {
                    return '有';
                } else if (value == '0') {
                    return '无';
                } else if (value == '-1') {
                    return '不知道';
                } else {
                    return '未填写';
                }
            },
            boolTransform4(value) {
                if (value == '0') {
                    return '无';
                } else if (value == '1') {
                    return '间断';
                } else if (value == '2') {
                    return '长期用药';
                } else {
                    return '未填写';
                }
            },
            boolTransform5(value) {
                if (value == '0') {
                    return '无';
                } else if (value == '1') {
                    return '不规律';
                } else if (value == '2') {
                    return '规律治疗';
                } else {
                    return '未填写';
                }
            },
            genderTransform(value) {
                if (value == '1') {
                    return '女';
                } else if (value == '0') {
                    return '男';
                } else {
                    return '未填写';
                }
            }
        }
    });

    //获取病历id
    if (sessionStorage.getItem('record_id')) {
        var record_id = sessionStorage.getItem('record_id');
    } else {
        location.href = "emrs_medical_record_list.html";
    }

    if (record_id) {

        var basic_api_path = "http://192.168.10.248:8080/Emrs/";

        function getTabData(url, tab_name) {
            $.ajax({
                url: basic_api_path + url,
                type: "POST",
                data: {
                    "record_id": record_id
                },
                success: function(data) {
                    app.mr[tab_name] = JSON.parse(data);
                }
            })
        }

        getTabData("getBasicInfo", "basic_info");
        getTabData("getHistoryOfPresentIllness", "history_of_present_illness");
        getTabData("getAnamnesis", "anamnesis");
        getTabData("getRiskFactors", "risk_factors");
        getTabData("getFamilyHistory", "family_history");
        getTabData("getPhysicalExamination", "physical_examination");
        getTabData("getRoutineExamination", "routine_examination");
        getTabData("getSpecialExamination", "special_examination");
        getTabData("getAdmissionDiagnosis", "admission_diagnosis");
        getTabData("getDischargeDiagnosis", "discharge_diagnosis");
    }

    $("a[data-toggle='tab']").on('click', function() {
        var index = $(this).attr('href').split('#tab_2_')[1];

        // console.log(index);
        var tab_name = "tab_" + index;
        app.tab_status[tab_name] = true;
    });
});