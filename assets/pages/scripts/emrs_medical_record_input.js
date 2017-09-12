jQuery(document).ready(function() {

    var pageData = {
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
            deep_venou_thrombosis_inducement_list: [
                { id: '1', text: '瘫痪、不完全瘫痪' },
                { id: '2', text: '近期石膏固定' },
                { id: '3', text: '近期卧床大于3天' },
                { id: '4', text: '12周内已行全麻或局麻的大手术' }
            ],
            deep_venou_thrombosis_symptom_list: [
                { id: '1', text: '沿深静脉走形的局部疼痛' },
                { id: '2', text: '全下肢水肿' },
                { id: '3', text: '与无症状侧小腿相比，出现症状一侧小腿水肿大于3cm（胫骨粗隆下10cm测量）' },
                { id: '4', text: '有症状腿部的凹陷型水肿' },
                { id: '5', text: '浅静脉侧枝循环（无静脉曲张情况下）' }
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
    }

    var FormWizard = function() {
        return {
            //main function to initiate the module
            init: function() {
                if (!jQuery().bootstrapWizard) {
                    return;
                }

                FormSelect2.init();

                var form = $('#submit_form');
                var error = $('.alert-danger', form);
                var success = $('.alert-success', form);

                //自定义格式
                $.validator.methods.phone = function(value, element) {
                    return this.optional(element) || /^1[34578]\d{9}$/.test(value);
                };
                //住院号，床位号，10位数字
                $.validator.methods.admission_num = function(value, element) {
                    return this.optional(element) || /^\d{10}$/.test(value);
                };
                $.validator.methods.bed_num = function(value, element) {
                    return this.optional(element) || /^\d{10}$/.test(value);
                };

                form.validate({
                    doNotHideMessage: true, //this option enables to show the error/success messages on tab switch.
                    errorElement: 'span', //default input error message container
                    errorClass: 'help-block help-block-error', // default input error message class
                    focusInvalid: false, // do not focus the last invalid input
                    rules: {
                        //基本信息部分开始
                        name: {
                            required: true
                        },
                        medical_card_number: {
                            required: true
                        },
                        cellphone_1: {
                            phone: true,
                            require_from_group: [1, ".phone-group"]
                        },
                        cellphone_2: {
                            phone: true,
                            require_from_group: [1, ".phone-group"]
                        },
                        telephone: {
                            require_from_group: [1, ".phone-group"]
                        },
                        gender: {
                            required: true
                        },
                        is_hospitalized: {
                            required: true
                        },
                        admission_num: {
                            admission_num: true,
                            required: true
                        },
                        bed_num: {
                            bed_num: true,
                            required: true
                        },
                        doctor: {
                            required: true
                        },
                        recorder: {
                            required: true
                        },
                        address: {
                            maxlength: 80
                        },
                        //基本信息部分结束
                        //现病史部分开始
                        xbs_frequentness: {
                            // number: true
                        }
                        //现病史部分结束
                    },

                    messages: { // custom messages for radio buttons and checkboxes
                        //基本信息部分开始
                        name: {
                            required: "患者姓名是必填项！",
                        },
                        medical_card_number: {
                            required: "就诊卡号是必填项！",
                        },
                        cellphone_1: {
                            phone: "手机号格式填写错误！",
                            require_from_group: "请至少填写一个联系方式！",
                        },
                        cellphone_2: {
                            phone: "手机号格式填写错误！",
                            require_from_group: "请至少填写一个联系方式！",
                        },
                        telephone: {
                            require_from_group: "请至少填写一个联系方式！",
                        },
                        gender: {
                            required: "请选择患者性别！",
                        },
                        is_hospitalized: {
                            required: "请选择患者类型！",
                        },
                        admission_num: {
                            admission_num: "住院号为10位数字！",
                            required: "住院号是必填项！",
                        },
                        bed_num: {
                            bed_num: "床位号为10位数字！",
                            required: "床位号是必填项！",
                        },
                        doctor: {
                            required: "请选择主治医生！",
                        },
                        recorder: {
                            required: "请选择记录者！",
                        },
                        address: {
                            maxlength: "长度不能超过80个字符！",
                        },
                        //基本信息部分结束
                        //现病史部分开始
                        xbs_frequentness: {
                            number: "请填写整数！"
                        }
                        //现病史部分结束
                    },

                    errorPlacement: function(error, element) { // render error placement for each input type
                        if (element.attr("name") == "gender") { // for uniform radio buttons, insert the after the given container
                            error.insertAfter("#form_gender_error");
                        } else {
                            error.insertAfter(element); // for other inputs, just perform default behavior
                        }
                    },

                    invalidHandler: function(event, validator) { //display error alert on form submit   
                        success.hide();
                        error.show();
                        App.scrollTo(error, -200);
                    },

                    highlight: function(element) { // hightlight error inputs
                        $(element)
                            .closest('.form-group').removeClass('has-success').addClass('has-error'); // set error class to the control group                    
                    },

                    unhighlight: function(element) { // revert the change done by hightlight
                        $(element)
                            .closest('.form-group').removeClass('has-error'); // set error class to the control group
                    },

                    success: function(label) {
                        if (label.attr("for") == "gender") { // for checkboxes and radio buttons, no need to show OK icon
                            label
                                .closest('.form-group').removeClass('has-error').addClass('has-success');
                            label.remove(); // remove error label here
                        } else { // display success icon for other inputs
                            label
                                .addClass('valid') // mark the current input as valid and display OK icon
                                .closest('.form-group').removeClass('has-error').addClass('has-success'); // set success class to the control group
                        }
                    },

                    submitHandler: function(form) {
                        success.show();
                        error.hide();
                        form[0].submit();
                        //add here some ajax code to submit your form or just call form.submit() if you want to submit the form without ajax
                    }

                });

                var displayConfirm = function() {
                    $('#tab4 .form-control-static', form).each(function() {
                        var input = $('[name="' + $(this).attr("data-display") + '"]', form);
                        if (input.is(":radio")) {
                            input = $('[name="' + $(this).attr("data-display") + '"]:checked', form);
                        }
                        if (input.is(":text") || input.is("textarea")) {
                            $(this).html(input.val());
                        } else if (input.is("select")) {
                            $(this).html(input.find('option:selected').text());
                        } else if (input.is(":radio") && input.is(":checked")) {
                            $(this).html(input.attr("data-title"));
                        } else if ($(this).attr("data-display") == 'payment[]') {
                            var payment = [];
                            $('[name="payment[]"]:checked', form).each(function() {
                                payment.push($(this).attr('data-title'));
                            });
                            $(this).html(payment.join("<br>"));
                        }
                    });
                }

                var handleTitle = function(tab, navigation, index) {
                    var total = navigation.find('li').length;
                    var current = index + 1;
                    // set wizard title
                    $('.step-title', $('#form_wizard_1')).text('步骤 ' + (index + 1) + ' / ' + total);
                    // set done steps
                    jQuery('li', $('#form_wizard_1')).removeClass("done");
                    var li_list = navigation.find('li');
                    for (var i = 0; i < index; i++) {
                        jQuery(li_list[i]).addClass("done");
                    }

                    if (current == 1) {
                        $('#form_wizard_1').find('.button-previous').hide();
                    } else {
                        $('#form_wizard_1').find('.button-previous').show();
                    }

                    if (current >= total) {
                        $('#form_wizard_1').find('.button-next').hide();
                        $('#form_wizard_1').find('.button-submit').show();
                        displayConfirm();
                    } else {
                        $('#form_wizard_1').find('.button-next').show();
                        $('#form_wizard_1').find('.button-submit').hide();
                    }
                    App.scrollTo($('.page-title'));
                }

                // default form wizard
                $('#form_wizard_1').bootstrapWizard({
                    'nextSelector': '.button-next',
                    'previousSelector': '.button-previous',
                    onTabClick: function(tab, navigation, index, clickedIndex) {
                        return false;

                        success.hide();
                        error.hide();
                        if (form.valid() == false) {
                            return false;
                        }

                        handleTitle(tab, navigation, clickedIndex);
                    },
                    onNext: function(tab, navigation, index) {
                        success.hide();
                        error.hide();

                        if (form.valid() == false) {
                            return false;
                        }

                        handleTitle(tab, navigation, index);
                    },
                    onPrevious: function(tab, navigation, index) {
                        success.hide();
                        error.hide();

                        handleTitle(tab, navigation, index);
                    },
                    onTabShow: function(tab, navigation, index) {
                        var total = navigation.find('li').length;
                        var current = index + 1;
                        var $percent = (current / total) * 100;
                        $('#form_wizard_1').find('.progress-bar').css({
                            width: $percent + '%'
                        });
                    }
                });

                $('#form_wizard_1').find('.button-previous').hide();
                $('#form_wizard_1 .button-submit').click(function() {

                    //基本信息部分数据处理开始
                    if (app.mr.basic_info.is_hospitalized != '1') {
                        app.mr.basic_info.admission_num = '';
                        app.mr.basic_info.bed_num = '';
                    }
                    //基本信息部分数据处理结束

                    //现病史部分数据处理开始
                    if (app.mr.history_of_present_illness.care_causes.indexOf('6') < 0) {
                        app.mr.history_of_present_illness.care_cause_others = '';
                    }
                    app.mr.history_of_present_illness.diseases = [];
                    var care_causes = app.mr.history_of_present_illness.care_causes.split(',');
                    var care_causes_disease = '';
                    if (care_causes.length > 0) {
                        care_causes.forEach(function(care_cause) {
                            if (care_cause == '1') {
                                care_causes_disease = app.care_causes_diseases.chest_pain;
                                care_causes_disease.disease_name = '1';

                                var disease_body_parts = $('#chest_pain_repeater').repeaterVal().chest_pain;
                                // console.log(disease_body_parts);
                                disease_body_parts.forEach(function(obj) {
                                    if (obj.body_part_name != '10') {
                                        obj.body_part_name_others = '';
                                    }
                                    if (obj.quality_of_pain != '13') {
                                        obj.quality_of_pain_others = '';
                                    }
                                    if (obj.duration_of_pain != '6') {
                                        obj.duration_of_pain_others = '';
                                    }
                                });

                                care_causes_disease.disease_body_parts = disease_body_parts;
                            } else if (care_cause == '2') {
                                care_causes_disease = app.care_causes_diseases.chest_distress;
                                care_causes_disease.disease_name = '2';
                                var disease_body_parts = $('#chest_distress_repeater').repeaterVal().chest_distress;
                                disease_body_parts.forEach(function(obj) {
                                    if (obj.body_part_name != '10') {
                                        obj.body_part_name_others = '';
                                    }
                                    if (obj.quality_of_pain != '13') {
                                        obj.quality_of_pain_others = '';
                                    }
                                    if (obj.duration_of_pain != '6') {
                                        obj.duration_of_pain_others = '';
                                    }
                                });
                                care_causes_disease.disease_body_parts = disease_body_parts;
                            } else if (care_cause == '3') {
                                care_causes_disease = app.care_causes_diseases.dyspnea;
                                care_causes_disease.disease_name = '3';
                            } else if (care_cause == '4') {
                                care_causes_disease = app.care_causes_diseases.palpitation;
                                care_causes_disease.disease_name = '4';
                            } else if (care_cause == '5') {
                                care_causes_disease = app.care_causes_diseases.abnormal_ecg;
                                care_causes_disease.disease_name = '5';
                            } else {
                                care_causes_disease = '';
                            }

                            if (care_causes_disease) {
                                if (care_causes_disease.onset_time.indexOf('5') < 0) {
                                    care_causes_disease.onset_time_others = '';
                                }
                                if (care_causes_disease.relieving_factors) {
                                    if (care_causes_disease.relieving_factors.indexOf('5') != 0) {
                                        care_causes_disease.relieving_factors_others = '';
                                    }
                                }
                                if (care_causes_disease.precipitating_factors) {
                                    if (care_causes_disease.precipitating_factors.indexOf('11') < 0) {
                                        care_causes_disease.precipitating_factors_others = '';
                                    }
                                }
                                if (care_causes_disease.radiation_sites) {
                                    if (care_causes_disease.radiation_sites.indexOf('7') < 0) {
                                        care_causes_disease.radiation_sites_others = '';
                                    }
                                }
                                if (care_causes_disease.simultaneous_phenomena) {
                                    if (care_causes_disease.simultaneous_phenomena.indexOf('21') < 0) {
                                        care_causes_disease.simultaneous_phenomena_others = '';
                                    }
                                }
                                app.mr.history_of_present_illness.diseases.push(care_causes_disease);
                            }
                        });
                    }
                    //现病史部分数据处理结束

                    //危险因素部分数据处理开始
                    //吸烟
                    if (app.mr.risk_factors.smoking.is_somking != '1') {
                        app.mr.risk_factors.smoking.duration = '';
                        app.mr.risk_factors.smoking.pieces_per_day = '';
                        app.mr.risk_factors.smoking.cigrette_type = '';
                        app.mr.risk_factors.smoking.cigrette_type_others = '';
                        app.mr.risk_factors.smoking.is_smoking_cessation = '';
                        app.mr.risk_factors.smoking.smoking_cessation_duration = '';
                    } else {
                        if (app.mr.risk_factors.smoking.cigrette_type.indexOf('5') < 0) {
                            app.mr.risk_factors.smoking.cigrette_type_others = '';
                        }
                        if (app.mr.risk_factors.smoking.is_smoking_cessation == '0') {
                            app.mr.risk_factors.smoking.smoking_cessation_duration = '';
                        }
                    }
                    //饮酒
                    if (app.mr.risk_factors.drinking.is_drinking != '1') {
                        app.mr.risk_factors.drinking.duration = '';
                        app.mr.risk_factors.drinking.tales_per_day = '';
                        app.mr.risk_factors.drinking.wine_type = '';
                        app.mr.risk_factors.drinking.wine_type_others = '';
                        app.mr.risk_factors.drinking.is_temperance = '';
                        app.mr.risk_factors.drinking.temperance_duration = '';
                    } else {
                        if (app.mr.risk_factors.drinking.wine_type.indexOf('5') < 0) {
                            app.mr.risk_factors.drinking.wine_type_others = '';
                        }
                        if (app.mr.risk_factors.drinking.is_temperance == '0') {
                            app.mr.risk_factors.drinking.temperance_duration = '';
                        }
                    }
                    //运动
                    if (app.mr.risk_factors.exercise.mode.indexOf('3') < 0) {
                        app.mr.risk_factors.exercise.mode_others = '';
                    }
                    //中心型肥胖
                    if (app.mr.risk_factors.central_obesity.is_central_obesity != '1') {
                        app.mr.risk_factors.central_obesity.duration = '';
                    }
                    //危险因素部分数据处理结束

                    //既往病史部分数据处理开始
                    //血脂异常
                    if (app.mr.anamnesis.lipid_abnormality.is_lipid_abnormality != '1') {
                        app.mr.anamnesis.lipid_abnormality.type = '';
                        app.mr.anamnesis.lipid_abnormality.duration = '';
                        app.mr.anamnesis.lipid_abnormality.is_under_treatment = '';
                        app.mr.anamnesis.lipid_abnormality.drug_name = '';
                    } else {
                        if (app.mr.anamnesis.lipid_abnormality.is_under_treatment != '2') {
                            app.mr.anamnesis.lipid_abnormality.drug_name = '';
                        }
                    }
                    //原发性高血压
                    if (app.mr.anamnesis.essential_hypertension.is_essential_hypertension != '1') {
                        app.mr.anamnesis.essential_hypertension.duration = '';
                        app.mr.anamnesis.essential_hypertension.is_under_treatment = '';
                        app.mr.anamnesis.essential_hypertension.drug_name = '';
                    } else {
                        if (app.mr.anamnesis.essential_hypertension.is_under_treatment != '2') {
                            app.mr.anamnesis.essential_hypertension.drug_name = '';
                        }
                    }
                    //血糖异常
                    if (app.mr.anamnesis.dysglycemia.is_dysglycemia != '1') {
                        app.mr.anamnesis.dysglycemia.type = '';
                        app.mr.anamnesis.dysglycemia.duration = '';
                    }
                    if (app.mr.anamnesis.dysglycemia.diabetes_mellitus.is_diabetes_mellitus != '1') {
                        app.mr.anamnesis.dysglycemia.diabetes_mellitus.is_under_treatment = '';
                        app.mr.anamnesis.dysglycemia.diabetes_mellitus.treatment_method = '';
                        app.mr.anamnesis.dysglycemia.diabetes_mellitus.oral_drug_name = '';
                    } else {
                        if (app.mr.anamnesis.dysglycemia.diabetes_mellitus.is_under_treatment != '1' && app.mr.anamnesis.dysglycemia.diabetes_mellitus.is_under_treatment != '2') {
                            app.mr.anamnesis.dysglycemia.diabetes_mellitus.treatment_method = '';
                            app.mr.anamnesis.dysglycemia.diabetes_mellitus.oral_drug_name = '';
                        } else {
                            if (app.mr.anamnesis.dysglycemia.diabetes_mellitus.treatment_method.indexOf('3') < 0) {
                                app.mr.anamnesis.dysglycemia.diabetes_mellitus.oral_drug_name = '';
                            }
                        }
                    }
                    //痛风
                    if (app.mr.anamnesis.gout.is_gout != '1') {
                        app.mr.anamnesis.gout.duration = '';
                    }
                    if (app.mr.anamnesis.gout.renal_insufficiency.is_renal_insufficiency != '1') {
                        app.mr.anamnesis.gout.renal_insufficiency.duration = '';
                        app.mr.anamnesis.gout.renal_insufficiency.etiology = '';
                    }
                    //心脏病史
                    if (app.mr.anamnesis.heart_diseases.old_myocardial_infarction.is_old_myocardial_infarction != '1') {
                        app.mr.anamnesis.heart_diseases.old_myocardial_infarction.onset_time_year = '';
                        app.mr.anamnesis.heart_diseases.old_myocardial_infarction.onset_time_month = '';
                        app.mr.anamnesis.heart_diseases.old_myocardial_infarction.onset_frequency = '';
                        app.mr.anamnesis.heart_diseases.old_myocardial_infarction.location = '';
                    } else {
                        if (app.mr.anamnesis.heart_diseases.old_myocardial_infarction.location.indexOf('7') < 0) {
                            app.mr.anamnesis.heart_diseases.old_myocardial_infarction.location_others = '';
                        }
                    }
                    if (app.mr.anamnesis.heart_diseases.other_heart_disease.is_other_heart_disease_history != '1') {
                        app.mr.anamnesis.heart_diseases.other_heart_disease.type = '';
                        app.mr.anamnesis.heart_diseases.other_heart_disease.type_others = '';
                    } else {
                        if (app.mr.anamnesis.heart_diseases.other_heart_disease.type.indexOf('8') < 0) {
                            app.mr.anamnesis.heart_diseases.other_heart_disease.type_others = '';
                        }
                    }
                    //深静脉血栓
                    if (app.mr.anamnesis.deep_venou_thrombosis.is_deep_venou_thrombosis != '1') {
                        app.mr.anamnesis.deep_venou_thrombosis.onset_time_year = '';
                        app.mr.anamnesis.deep_venou_thrombosis.onset_time_month = '';
                        app.mr.anamnesis.deep_venou_thrombosis.inducements = '';
                        app.mr.anamnesis.deep_venou_thrombosis.symptoms = '';
                        app.mr.anamnesis.deep_venou_thrombosis.diagnosis_result = '';
                    }
                    //既往缺血性卒中
                    if (app.mr.anamnesis.old_ischemic_stroke.is_old_ischemic_stroke != '1') {
                        app.mr.anamnesis.old_ischemic_stroke.types = [];
                    } else {
                        app.mr.anamnesis.old_ischemic_stroke.types = $('#old_ischemic_stroke_repeater').repeaterVal().old_ischemic_stroke;
                    }
                    //血管性疾病史
                    if (app.mr.anamnesis.vascular_diseases.is_vascular_diseases != '1') {
                        app.mr.anamnesis.vascular_diseases.types = '';
                    }
                    //出血病史
                    if (app.mr.anamnesis.hemorrhage.is_hemorrhage != '1') {
                        app.mr.anamnesis.hemorrhage.types = [];
                    } else {
                        app.mr.anamnesis.hemorrhage.types = $('#hemorrhage_repeater').repeaterVal().hemorrhage;
                    }
                    //出血史
                    if (app.mr.anamnesis.bleeding.is_bleeding != '1') {
                        app.mr.anamnesis.bleeding.causes = [];
                    } else {
                        app.mr.anamnesis.bleeding.causes = $('#bleeding_repeater').repeaterVal().bleeding;
                    }
                    //既往病史部分数据处理结束

                    //家族史部分数据处理开始
                    app.mr.family_history = [];
                    if (app.family_history.is_premature_chd == '1') {
                        app.mr.family_history.push({
                            disease_name: '1',
                            onset_members: $('#premature_chd_repeater').repeaterVal().premature_chd
                        });
                    }
                    if (app.family_history.is_myocardial_infarction == '1') {
                        app.mr.family_history.push({
                            disease_name: '2',
                            onset_members: $('#myocardial_infarction_repeater').repeaterVal().myocardial_infarction
                        });
                    }
                    if (app.family_history.is_ischemic_stroke == '1') {
                        app.mr.family_history.push({
                            disease_name: '3',
                            onset_members: $('#ischemic_stroke_repeater').repeaterVal().ischemic_stroke
                        });
                    }
                    if (app.family_history.is_hemorrhagic_stroke == '1') {
                        app.mr.family_history.push({
                            disease_name: '4',
                            onset_members: $('#hemorrhagic_stroke_repeater').repeaterVal().hemorrhagic_stroke
                        });
                    }
                    if (app.family_history.is_sudden_death == '1') {
                        app.mr.family_history.push({
                            disease_name: '5',
                            onset_members: $('#sudden_death_repeater').repeaterVal().sudden_death
                        });
                    }
                    //家族史部分数据处理结束

                    //体格检查部分数据处理结束
                    if (app.mr.physical_examination.is_lung_wet_rales != '1') {
                        app.mr.physical_examination.lung_wet_rales_range = '';
                    }
                    if (app.mr.physical_examination.is_heart_failure != '1') {
                        app.mr.physical_examination.Killip_class = '';
                    }
                    if (app.mr.physical_examination.is_ear_lobe_longitudinal_crack != '1') {
                        app.mr.physical_examination.ear_lobe_longitudinal_crack_parts = '';
                    }
                    if (app.mr.physical_examination.is_skin_yellow_pigment_tumor != '1') {
                        app.mr.physical_examination.skin_yellow_pigment_tumor_parts = '';
                    }
                    if (app.mr.physical_examination.is_alopecia != '1') {
                        app.mr.physical_examination.alopecia_parts = '';
                    }
                    //体格检查部分数据处理结束

                    //常规检查部分数据处理开始
                    app.mr.routine_examination.blood_biochemistry.not_HDL = (app.mr.routine_examination.blood_biochemistry.TC - app.mr.routine_examination.blood_biochemistry.HDL).toFixed(2);
                    //常规检查部分数据处理结束

                    //特殊检查部分数据处理开始
                    var ecg_arrhythmia_types = app.ecg_arrhythmia_type.arrhythmia_types.split(',');
                    if (app.mr.special_examination.ecg.pathological_q_wave.is_pathological_q_wave != '1') {
                        app.mr.special_examination.ecg.pathological_q_wave.q_wave_leads = '';
                    }
                    if (app.mr.special_examination.ecg.st_segment_change.is_st_segment_change != '1') {
                        app.mr.special_examination.ecg.st_segment_change.st_segment_changes = [{
                            is_st_segment_depression: '',
                            change_detail: {
                                is_lead_I: '',
                                lead_I_amplitude: '',
                                is_lead_II: '',
                                lead_II_amplitude: '',
                                is_lead_III: '',
                                lead_III_amplitude: '',
                                is_lead_aVR: '',
                                lead_aVR_amplitude: '',
                                is_lead_aVL: '',
                                lead_aVL_amplitude: '',
                                is_lead_aVF: '',
                                lead_aVF_amplitude: '',
                                is_lead_V1: '',
                                lead_V1_amplitude: '',
                                is_lead_V2: '',
                                lead_V2_amplitude: '',
                                is_lead_V3: '',
                                lead_V3_amplitude: '',
                                is_lead_V4: '',
                                lead_V4_amplitude: '',
                                is_lead_V5: '',
                                lead_V5_amplitude: '',
                                is_lead_V6: '',
                                lead_V6_amplitude: '',
                                is_lead_V7: '',
                                lead_V7_amplitude: '',
                                is_lead_V8: '',
                                lead_V8_amplitude: '',
                                is_lead_V9: '',
                                lead_V9_amplitude: ''
                            }
                        }, {
                            is_st_segment_elevation: '',
                            change_detail: {
                                is_lead_I: '',
                                lead_I_amplitude: '',
                                is_lead_II: '',
                                lead_II_amplitude: '',
                                is_lead_III: '',
                                lead_III_amplitude: '',
                                is_lead_aVR: '',
                                lead_aVR_amplitude: '',
                                is_lead_aVL: '',
                                lead_aVL_amplitude: '',
                                is_lead_aVF: '',
                                lead_aVF_amplitude: '',
                                is_lead_V1: '',
                                lead_V1_amplitude: '',
                                is_lead_V2: '',
                                lead_V2_amplitude: '',
                                is_lead_V3: '',
                                lead_V3_amplitude: '',
                                is_lead_V4: '',
                                lead_V4_amplitude: '',
                                is_lead_V5: '',
                                lead_V5_amplitude: '',
                                is_lead_V6: '',
                                lead_V6_amplitude: '',
                                is_lead_V7: '',
                                lead_V7_amplitude: '',
                                is_lead_V8: '',
                                lead_V8_amplitude: '',
                                is_lead_V9: '',
                                lead_V9_amplitude: ''
                            }
                        }];
                    } else {
                        if (app.mr.special_examination.ecg.st_segment_change.st_segment_changes[0].is_st_segment_depression != '1') {
                            app.mr.special_examination.ecg.st_segment_change.st_segment_changes[0].change_detail.is_lead_I = '';
                            app.mr.special_examination.ecg.st_segment_change.st_segment_changes[0].change_detail.lead_I_amplitude = '';
                            app.mr.special_examination.ecg.st_segment_change.st_segment_changes[0].change_detail.is_lead_II = '';
                            app.mr.special_examination.ecg.st_segment_change.st_segment_changes[0].change_detail.lead_II_amplitude = '';
                            app.mr.special_examination.ecg.st_segment_change.st_segment_changes[0].change_detail.is_lead_III = '';
                            app.mr.special_examination.ecg.st_segment_change.st_segment_changes[0].change_detail.lead_III_amplitude = '';
                            app.mr.special_examination.ecg.st_segment_change.st_segment_changes[0].change_detail.is_lead_aVR = '';
                            app.mr.special_examination.ecg.st_segment_change.st_segment_changes[0].change_detail.lead_aVR_amplitude = '';
                            app.mr.special_examination.ecg.st_segment_change.st_segment_changes[0].change_detail.is_lead_aVL = '';
                            app.mr.special_examination.ecg.st_segment_change.st_segment_changes[0].change_detail.lead_aVL_amplitude = '';
                            app.mr.special_examination.ecg.st_segment_change.st_segment_changes[0].change_detail.is_lead_aVF = '';
                            app.mr.special_examination.ecg.st_segment_change.st_segment_changes[0].change_detail.lead_aVF_amplitude = '';
                            app.mr.special_examination.ecg.st_segment_change.st_segment_changes[0].change_detail.is_lead_V1 = '';
                            app.mr.special_examination.ecg.st_segment_change.st_segment_changes[0].change_detail.lead_V1_amplitude = '';
                            app.mr.special_examination.ecg.st_segment_change.st_segment_changes[0].change_detail.is_lead_V2 = '';
                            app.mr.special_examination.ecg.st_segment_change.st_segment_changes[0].change_detail.lead_V2_amplitude = '';
                            app.mr.special_examination.ecg.st_segment_change.st_segment_changes[0].change_detail.is_lead_V3 = '';
                            app.mr.special_examination.ecg.st_segment_change.st_segment_changes[0].change_detail.lead_V3_amplitude = '';
                            app.mr.special_examination.ecg.st_segment_change.st_segment_changes[0].change_detail.is_lead_V4 = '';
                            app.mr.special_examination.ecg.st_segment_change.st_segment_changes[0].change_detail.lead_V4_amplitude = '';
                            app.mr.special_examination.ecg.st_segment_change.st_segment_changes[0].change_detail.is_lead_V5 = '';
                            app.mr.special_examination.ecg.st_segment_change.st_segment_changes[0].change_detail.lead_V5_amplitude = '';
                            app.mr.special_examination.ecg.st_segment_change.st_segment_changes[0].change_detail.is_lead_V6 = '';
                            app.mr.special_examination.ecg.st_segment_change.st_segment_changes[0].change_detail.lead_V6_amplitude = '';
                            app.mr.special_examination.ecg.st_segment_change.st_segment_changes[0].change_detail.is_lead_V7 = '';
                            app.mr.special_examination.ecg.st_segment_change.st_segment_changes[0].change_detail.lead_V7_amplitude = '';
                            app.mr.special_examination.ecg.st_segment_change.st_segment_changes[0].change_detail.is_lead_V8 = '';
                            app.mr.special_examination.ecg.st_segment_change.st_segment_changes[0].change_detail.lead_V8_amplitude = '';
                            app.mr.special_examination.ecg.st_segment_change.st_segment_changes[0].change_detail.is_lead_V9 = '';
                            app.mr.special_examination.ecg.st_segment_change.st_segment_changes[0].change_detail.lead_V9_amplitude = '';
                        } else {
                            if (app.mr.special_examination.ecg.st_segment_change.st_segment_changes[0].change_detail.is_lead_I != '1') {
                                app.mr.special_examination.ecg.st_segment_change.st_segment_changes[0].change_detail.lead_I_amplitude = '';
                            }
                            if (app.mr.special_examination.ecg.st_segment_change.st_segment_changes[0].change_detail.is_lead_II != '1') {
                                app.mr.special_examination.ecg.st_segment_change.st_segment_changes[0].change_detail.lead_II_amplitude = '';
                            }
                            if (app.mr.special_examination.ecg.st_segment_change.st_segment_changes[0].change_detail.is_lead_III != '1') {
                                app.mr.special_examination.ecg.st_segment_change.st_segment_changes[0].change_detail.lead_III_amplitude = '';
                            }
                            if (app.mr.special_examination.ecg.st_segment_change.st_segment_changes[0].change_detail.is_lead_aVR != '1') {
                                app.mr.special_examination.ecg.st_segment_change.st_segment_changes[0].change_detail.lead_I_amplitude = '';
                            }
                            if (app.mr.special_examination.ecg.st_segment_change.st_segment_changes[0].change_detail.is_lead_aVL != '1') {
                                app.mr.special_examination.ecg.st_segment_change.st_segment_changes[0].change_detail.lead_aVL_amplitude = '';
                            }
                            if (app.mr.special_examination.ecg.st_segment_change.st_segment_changes[0].change_detail.is_lead_aVF != '1') {
                                app.mr.special_examination.ecg.st_segment_change.st_segment_changes[0].change_detail.lead_aVF_amplitude = '';
                            }
                            if (app.mr.special_examination.ecg.st_segment_change.st_segment_changes[0].change_detail.is_lead_V1 != '1') {
                                app.mr.special_examination.ecg.st_segment_change.st_segment_changes[0].change_detail.lead_V1_amplitude = '';
                            }
                            if (app.mr.special_examination.ecg.st_segment_change.st_segment_changes[0].change_detail.is_lead_V2 != '1') {
                                app.mr.special_examination.ecg.st_segment_change.st_segment_changes[0].change_detail.lead_V2_amplitude = '';
                            }
                            if (app.mr.special_examination.ecg.st_segment_change.st_segment_changes[0].change_detail.is_lead_V3 != '1') {
                                app.mr.special_examination.ecg.st_segment_change.st_segment_changes[0].change_detail.lead_V3_amplitude = '';
                            }
                            if (app.mr.special_examination.ecg.st_segment_change.st_segment_changes[0].change_detail.is_lead_V4 != '1') {
                                app.mr.special_examination.ecg.st_segment_change.st_segment_changes[0].change_detail.lead_V4_amplitude = '';
                            }
                            if (app.mr.special_examination.ecg.st_segment_change.st_segment_changes[0].change_detail.is_lead_V5 != '1') {
                                app.mr.special_examination.ecg.st_segment_change.st_segment_changes[0].change_detail.lead_V5_amplitude = '';
                            }
                            if (app.mr.special_examination.ecg.st_segment_change.st_segment_changes[0].change_detail.is_lead_V6 != '1') {
                                app.mr.special_examination.ecg.st_segment_change.st_segment_changes[0].change_detail.lead_V6_amplitude = '';
                            }
                            if (app.mr.special_examination.ecg.st_segment_change.st_segment_changes[0].change_detail.is_lead_V7 != '1') {
                                app.mr.special_examination.ecg.st_segment_change.st_segment_changes[0].change_detail.lead_V7_amplitude = '';
                            }
                            if (app.mr.special_examination.ecg.st_segment_change.st_segment_changes[0].change_detail.is_lead_V8 != '1') {
                                app.mr.special_examination.ecg.st_segment_change.st_segment_changes[0].change_detail.lead_V8_amplitude = '';
                            }
                            if (app.mr.special_examination.ecg.st_segment_change.st_segment_changes[0].change_detail.is_lead_V9 != '1') {
                                app.mr.special_examination.ecg.st_segment_change.st_segment_changes[0].change_detail.lead_V9_amplitude = '';
                            }
                        }
                        if (app.mr.special_examination.ecg.st_segment_change.st_segment_changes[1].is_st_segment_elevation != '1') {
                            app.mr.special_examination.ecg.st_segment_change.st_segment_changes[1].change_detail.is_lead_I = '';
                            app.mr.special_examination.ecg.st_segment_change.st_segment_changes[1].change_detail.lead_I_amplitude = '';
                            app.mr.special_examination.ecg.st_segment_change.st_segment_changes[1].change_detail.is_lead_II = '';
                            app.mr.special_examination.ecg.st_segment_change.st_segment_changes[1].change_detail.lead_II_amplitude = '';
                            app.mr.special_examination.ecg.st_segment_change.st_segment_changes[1].change_detail.is_lead_III = '';
                            app.mr.special_examination.ecg.st_segment_change.st_segment_changes[1].change_detail.lead_III_amplitude = '';
                            app.mr.special_examination.ecg.st_segment_change.st_segment_changes[1].change_detail.is_lead_aVR = '';
                            app.mr.special_examination.ecg.st_segment_change.st_segment_changes[1].change_detail.lead_aVR_amplitude = '';
                            app.mr.special_examination.ecg.st_segment_change.st_segment_changes[1].change_detail.is_lead_aVL = '';
                            app.mr.special_examination.ecg.st_segment_change.st_segment_changes[1].change_detail.lead_aVL_amplitude = '';
                            app.mr.special_examination.ecg.st_segment_change.st_segment_changes[1].change_detail.is_lead_aVF = '';
                            app.mr.special_examination.ecg.st_segment_change.st_segment_changes[1].change_detail.lead_aVF_amplitude = '';
                            app.mr.special_examination.ecg.st_segment_change.st_segment_changes[1].change_detail.is_lead_V1 = '';
                            app.mr.special_examination.ecg.st_segment_change.st_segment_changes[1].change_detail.lead_V1_amplitude = '';
                            app.mr.special_examination.ecg.st_segment_change.st_segment_changes[1].change_detail.is_lead_V2 = '';
                            app.mr.special_examination.ecg.st_segment_change.st_segment_changes[1].change_detail.lead_V2_amplitude = '';
                            app.mr.special_examination.ecg.st_segment_change.st_segment_changes[1].change_detail.is_lead_V3 = '';
                            app.mr.special_examination.ecg.st_segment_change.st_segment_changes[1].change_detail.lead_V3_amplitude = '';
                            app.mr.special_examination.ecg.st_segment_change.st_segment_changes[1].change_detail.is_lead_V4 = '';
                            app.mr.special_examination.ecg.st_segment_change.st_segment_changes[1].change_detail.lead_V4_amplitude = '';
                            app.mr.special_examination.ecg.st_segment_change.st_segment_changes[1].change_detail.is_lead_V5 = '';
                            app.mr.special_examination.ecg.st_segment_change.st_segment_changes[1].change_detail.lead_V5_amplitude = '';
                            app.mr.special_examination.ecg.st_segment_change.st_segment_changes[1].change_detail.is_lead_V6 = '';
                            app.mr.special_examination.ecg.st_segment_change.st_segment_changes[1].change_detail.lead_V6_amplitude = '';
                            app.mr.special_examination.ecg.st_segment_change.st_segment_changes[1].change_detail.is_lead_V7 = '';
                            app.mr.special_examination.ecg.st_segment_change.st_segment_changes[1].change_detail.lead_V7_amplitude = '';
                            app.mr.special_examination.ecg.st_segment_change.st_segment_changes[1].change_detail.is_lead_V8 = '';
                            app.mr.special_examination.ecg.st_segment_change.st_segment_changes[1].change_detail.lead_V8_amplitude = '';
                            app.mr.special_examination.ecg.st_segment_change.st_segment_changes[1].change_detail.is_lead_V9 = '';
                            app.mr.special_examination.ecg.st_segment_change.st_segment_changes[1].change_detail.lead_V9_amplitude = '';
                        } else {
                            if (app.mr.special_examination.ecg.st_segment_change.st_segment_changes[1].change_detail.is_lead_I != '1') {
                                app.mr.special_examination.ecg.st_segment_change.st_segment_changes[1].change_detail.lead_I_amplitude = '';
                            }
                            if (app.mr.special_examination.ecg.st_segment_change.st_segment_changes[1].change_detail.is_lead_II != '1') {
                                app.mr.special_examination.ecg.st_segment_change.st_segment_changes[1].change_detail.lead_II_amplitude = '';
                            }
                            if (app.mr.special_examination.ecg.st_segment_change.st_segment_changes[1].change_detail.is_lead_III != '1') {
                                app.mr.special_examination.ecg.st_segment_change.st_segment_changes[1].change_detail.lead_III_amplitude = '';
                            }
                            if (app.mr.special_examination.ecg.st_segment_change.st_segment_changes[1].change_detail.is_lead_aVR != '1') {
                                app.mr.special_examination.ecg.st_segment_change.st_segment_changes[1].change_detail.lead_I_amplitude = '';
                            }
                            if (app.mr.special_examination.ecg.st_segment_change.st_segment_changes[1].change_detail.is_lead_aVL != '1') {
                                app.mr.special_examination.ecg.st_segment_change.st_segment_changes[1].change_detail.lead_aVL_amplitude = '';
                            }
                            if (app.mr.special_examination.ecg.st_segment_change.st_segment_changes[1].change_detail.is_lead_aVF != '1') {
                                app.mr.special_examination.ecg.st_segment_change.st_segment_changes[1].change_detail.lead_aVF_amplitude = '';
                            }
                            if (app.mr.special_examination.ecg.st_segment_change.st_segment_changes[1].change_detail.is_lead_V1 != '1') {
                                app.mr.special_examination.ecg.st_segment_change.st_segment_changes[1].change_detail.lead_V1_amplitude = '';
                            }
                            if (app.mr.special_examination.ecg.st_segment_change.st_segment_changes[1].change_detail.is_lead_V2 != '1') {
                                app.mr.special_examination.ecg.st_segment_change.st_segment_changes[1].change_detail.lead_V2_amplitude = '';
                            }
                            if (app.mr.special_examination.ecg.st_segment_change.st_segment_changes[1].change_detail.is_lead_V3 != '1') {
                                app.mr.special_examination.ecg.st_segment_change.st_segment_changes[1].change_detail.lead_V3_amplitude = '';
                            }
                            if (app.mr.special_examination.ecg.st_segment_change.st_segment_changes[1].change_detail.is_lead_V4 != '1') {
                                app.mr.special_examination.ecg.st_segment_change.st_segment_changes[1].change_detail.lead_V4_amplitude = '';
                            }
                            if (app.mr.special_examination.ecg.st_segment_change.st_segment_changes[1].change_detail.is_lead_V5 != '1') {
                                app.mr.special_examination.ecg.st_segment_change.st_segment_changes[1].change_detail.lead_V5_amplitude = '';
                            }
                            if (app.mr.special_examination.ecg.st_segment_change.st_segment_changes[1].change_detail.is_lead_V6 != '1') {
                                app.mr.special_examination.ecg.st_segment_change.st_segment_changes[1].change_detail.lead_V6_amplitude = '';
                            }
                            if (app.mr.special_examination.ecg.st_segment_change.st_segment_changes[0].change_detail.is_lead_V7 != '1') {
                                app.mr.special_examination.ecg.st_segment_change.st_segment_changes[0].change_detail.lead_V7_amplitude = '';
                            }
                            if (app.mr.special_examination.ecg.st_segment_change.st_segment_changes[1].change_detail.is_lead_V8 != '1') {
                                app.mr.special_examination.ecg.st_segment_change.st_segment_changes[1].change_detail.lead_V8_amplitude = '';
                            }
                            if (app.mr.special_examination.ecg.st_segment_change.st_segment_changes[1].change_detail.is_lead_V9 != '1') {
                                app.mr.special_examination.ecg.st_segment_change.st_segment_changes[1].change_detail.lead_V9_amplitude = '';
                            }
                        }
                    }

                    if (app.mr.special_examination.ecg.t_wave_change.is_t_wave_change != '1') {
                        app.mr.special_examination.ecg.t_wave_change.change_detail.is_lead_I = '';
                        app.mr.special_examination.ecg.t_wave_change.change_detail.lead_I_waveforms = '';
                        app.mr.special_examination.ecg.t_wave_change.change_detail.lead_I_amplitude = '';
                        app.mr.special_examination.ecg.t_wave_change.change_detail.is_lead_II = '';
                        app.mr.special_examination.ecg.t_wave_change.change_detail.lead_II_waveforms = '';
                        app.mr.special_examination.ecg.t_wave_change.change_detail.lead_II_amplitude = '';
                        app.mr.special_examination.ecg.t_wave_change.change_detail.is_lead_III = '';
                        app.mr.special_examination.ecg.t_wave_change.change_detail.lead_III_waveforms = '';
                        app.mr.special_examination.ecg.t_wave_change.change_detail.lead_III_amplitude = '';
                        app.mr.special_examination.ecg.t_wave_change.change_detail.is_lead_aVR = '';
                        app.mr.special_examination.ecg.t_wave_change.change_detail.lead_aVR_waveforms = '';
                        app.mr.special_examination.ecg.t_wave_change.change_detail.lead_aVR_amplitude = '';
                        app.mr.special_examination.ecg.t_wave_change.change_detail.is_lead_aVL = '';
                        app.mr.special_examination.ecg.t_wave_change.change_detail.lead_aVL_waveforms = '';
                        app.mr.special_examination.ecg.t_wave_change.change_detail.lead_aVL_amplitude = '';
                        app.mr.special_examination.ecg.t_wave_change.change_detail.is_lead_aVF = '';
                        app.mr.special_examination.ecg.t_wave_change.change_detail.lead_aVF_waveforms = '';
                        app.mr.special_examination.ecg.t_wave_change.change_detail.lead_aVF_amplitude = '';
                        app.mr.special_examination.ecg.t_wave_change.change_detail.is_lead_V1 = '';
                        app.mr.special_examination.ecg.t_wave_change.change_detail.lead_V1_waveforms = '';
                        app.mr.special_examination.ecg.t_wave_change.change_detail.lead_V1_amplitude = '';
                        app.mr.special_examination.ecg.t_wave_change.change_detail.is_lead_V2 = '';
                        app.mr.special_examination.ecg.t_wave_change.change_detail.lead_V2_waveforms = '';
                        app.mr.special_examination.ecg.t_wave_change.change_detail.lead_V2_amplitude = '';
                        app.mr.special_examination.ecg.t_wave_change.change_detail.is_lead_V3 = '';
                        app.mr.special_examination.ecg.t_wave_change.change_detail.lead_V3_waveforms = '';
                        app.mr.special_examination.ecg.t_wave_change.change_detail.lead_V3_amplitude = '';
                        app.mr.special_examination.ecg.t_wave_change.change_detail.is_lead_V4 = '';
                        app.mr.special_examination.ecg.t_wave_change.change_detail.lead_V4_waveforms = '';
                        app.mr.special_examination.ecg.t_wave_change.change_detail.lead_V4_amplitude = '';
                        app.mr.special_examination.ecg.t_wave_change.change_detail.is_lead_V5 = '';
                        app.mr.special_examination.ecg.t_wave_change.change_detail.lead_V5_waveforms = '';
                        app.mr.special_examination.ecg.t_wave_change.change_detail.lead_V5_amplitude = '';
                        app.mr.special_examination.ecg.t_wave_change.change_detail.is_lead_V6 = '';
                        app.mr.special_examination.ecg.t_wave_change.change_detail.lead_V6_waveforms = '';
                        app.mr.special_examination.ecg.t_wave_change.change_detail.lead_V6_amplitude = '';
                        app.mr.special_examination.ecg.t_wave_change.change_detail.is_lead_V7 = '';
                        app.mr.special_examination.ecg.t_wave_change.change_detail.lead_V7_waveforms = '';
                        app.mr.special_examination.ecg.t_wave_change.change_detail.lead_V7_amplitude = '';
                        app.mr.special_examination.ecg.t_wave_change.change_detail.is_lead_V8 = '';
                        app.mr.special_examination.ecg.t_wave_change.change_detail.lead_V8_waveforms = '';
                        app.mr.special_examination.ecg.t_wave_change.change_detail.lead_V8_amplitude = '';
                        app.mr.special_examination.ecg.t_wave_change.change_detail.is_lead_V9 = '';
                        app.mr.special_examination.ecg.t_wave_change.change_detail.lead_V9_waveforms = '';
                        app.mr.special_examination.ecg.t_wave_change.change_detail.lead_V9_amplitude = '';
                    } else {
                        if (app.mr.special_examination.ecg.t_wave_change.change_detail.is_lead_I != '1') {
                            app.mr.special_examination.ecg.t_wave_change.change_detail.lead_I_waveforms = '';
                            app.mr.special_examination.ecg.t_wave_change.change_detail.lead_I_amplitude = '';
                        }
                        if (app.mr.special_examination.ecg.t_wave_change.change_detail.is_lead_II != '1') {
                            app.mr.special_examination.ecg.t_wave_change.change_detail.lead_II_waveforms = '';
                            app.mr.special_examination.ecg.t_wave_change.change_detail.lead_II_amplitude = '';
                        }
                        if (app.mr.special_examination.ecg.t_wave_change.change_detail.is_lead_III != '1') {
                            app.mr.special_examination.ecg.t_wave_change.change_detail.lead_III_waveforms = '';
                            app.mr.special_examination.ecg.t_wave_change.change_detail.lead_III_amplitude = '';
                        }
                        if (app.mr.special_examination.ecg.t_wave_change.change_detail.is_lead_aVR != '1') {
                            app.mr.special_examination.ecg.t_wave_change.change_detail.lead_aVR_waveforms = '';
                            app.mr.special_examination.ecg.t_wave_change.change_detail.lead_aVR_amplitude = '';
                        }
                        if (app.mr.special_examination.ecg.t_wave_change.change_detail.is_lead_aVL != '1') {
                            app.mr.special_examination.ecg.t_wave_change.change_detail.lead_aVL_waveforms = '';
                            app.mr.special_examination.ecg.t_wave_change.change_detail.lead_aVL_amplitude = '';
                        }
                        if (app.mr.special_examination.ecg.t_wave_change.change_detail.is_lead_aVF != '1') {
                            app.mr.special_examination.ecg.t_wave_change.change_detail.lead_aVF_waveforms = '';
                            app.mr.special_examination.ecg.t_wave_change.change_detail.lead_aVF_amplitude = '';
                        }
                        if (app.mr.special_examination.ecg.t_wave_change.change_detail.is_lead_V1 != '1') {
                            app.mr.special_examination.ecg.t_wave_change.change_detail.lead_V1_waveforms = '';
                            app.mr.special_examination.ecg.t_wave_change.change_detail.lead_V1_amplitude = '';
                        }
                        if (app.mr.special_examination.ecg.t_wave_change.change_detail.is_lead_V2 != '1') {
                            app.mr.special_examination.ecg.t_wave_change.change_detail.lead_V2_waveforms = '';
                            app.mr.special_examination.ecg.t_wave_change.change_detail.lead_V2_amplitude = '';
                        }
                        if (app.mr.special_examination.ecg.t_wave_change.change_detail.is_lead_V3 != '1') {
                            app.mr.special_examination.ecg.t_wave_change.change_detail.lead_V3_waveforms = '';
                            app.mr.special_examination.ecg.t_wave_change.change_detail.lead_V3_amplitude = '';
                        }
                        if (app.mr.special_examination.ecg.t_wave_change.change_detail.is_lead_V4 != '1') {
                            app.mr.special_examination.ecg.t_wave_change.change_detail.lead_V4_waveforms = '';
                            app.mr.special_examination.ecg.t_wave_change.change_detail.lead_V4_amplitude = '';
                        }
                        if (app.mr.special_examination.ecg.t_wave_change.change_detail.is_lead_V5 != '1') {
                            app.mr.special_examination.ecg.t_wave_change.change_detail.lead_V5_waveforms = '';
                            app.mr.special_examination.ecg.t_wave_change.change_detail.lead_V5_amplitude = '';
                        }
                        if (app.mr.special_examination.ecg.t_wave_change.change_detail.is_lead_V6 != '1') {
                            app.mr.special_examination.ecg.t_wave_change.change_detail.lead_V6_waveforms = '';
                            app.mr.special_examination.ecg.t_wave_change.change_detail.lead_V6_amplitude = '';
                        }
                        if (app.mr.special_examination.ecg.t_wave_change.change_detail.is_lead_V7 != '1') {
                            app.mr.special_examination.ecg.t_wave_change.change_detail.lead_V7_waveforms = '';
                            app.mr.special_examination.ecg.t_wave_change.change_detail.lead_V7_amplitude = '';
                        }
                        if (app.mr.special_examination.ecg.t_wave_change.change_detail.is_lead_V8 != '1') {
                            app.mr.special_examination.ecg.t_wave_change.change_detail.lead_V8_waveforms = '';
                            app.mr.special_examination.ecg.t_wave_change.change_detail.lead_V8_amplitude = '';
                        }
                        if (app.mr.special_examination.ecg.t_wave_change.change_detail.is_lead_V9 != '1') {
                            app.mr.special_examination.ecg.t_wave_change.change_detail.lead_V9_waveforms = '';
                            app.mr.special_examination.ecg.t_wave_change.change_detail.lead_V9_amplitude = '';
                        }
                    }
                    if (app.mr.special_examination.ecg.arrhythmia.is_arrhythmia == '1') {
                        if (ecg_arrhythmia_types.length > 0) {
                            ecg_arrhythmia_types.forEach(function(type) {
                                if (type == '11') {
                                    app.mr.special_examination.ecg.arrhythmia.arrhythmia_types.push({
                                        arrhythmia_type: type,
                                        arrhythmia_type_others: app.ecg_arrhythmia_type.arrhythmia_type_others
                                    })
                                } else {
                                    app.mr.special_examination.ecg.arrhythmia.arrhythmia_types.push({
                                        arrhythmia_type: type,
                                        arrhythmia_type_others: ""
                                    })
                                }
                            })
                        }
                    }

                    if (app.mr.special_examination.exercise_ecg.st_segment_change.is_st_segment_change != '1') {
                        app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes = [{
                            is_st_segment_depression: '',
                            duration: '',
                            change_detail: {
                                is_lead_I: '',
                                lead_I_amplitude: '',
                                is_lead_II: '',
                                lead_II_amplitude: '',
                                is_lead_III: '',
                                lead_III_amplitude: '',
                                is_lead_aVR: '',
                                lead_aVR_amplitude: '',
                                is_lead_aVL: '',
                                lead_aVL_amplitude: '',
                                is_lead_aVF: '',
                                lead_aVF_amplitude: '',
                                is_lead_V1: '',
                                lead_V1_amplitude: '',
                                is_lead_V2: '',
                                lead_V2_amplitude: '',
                                is_lead_V3: '',
                                lead_V3_amplitude: '',
                                is_lead_V4: '',
                                lead_V4_amplitude: '',
                                is_lead_V5: '',
                                lead_V5_amplitude: '',
                                is_lead_V6: '',
                                lead_V6_amplitude: '',
                                is_lead_V7: '',
                                lead_V7_amplitude: '',
                                is_lead_V8: '',
                                lead_V8_amplitude: '',
                                is_lead_V9: '',
                                lead_V9_amplitude: ''
                            }
                        }, {
                            is_st_segment_elevation: '',
                            duration: '',
                            change_detail: {
                                is_lead_I: '',
                                lead_I_amplitude: '',
                                is_lead_II: '',
                                lead_II_amplitude: '',
                                is_lead_III: '',
                                lead_III_amplitude: '',
                                is_lead_aVR: '',
                                lead_aVR_amplitude: '',
                                is_lead_aVL: '',
                                lead_aVL_amplitude: '',
                                is_lead_aVF: '',
                                lead_aVF_amplitude: '',
                                is_lead_V1: '',
                                lead_V1_amplitude: '',
                                is_lead_V2: '',
                                lead_V2_amplitude: '',
                                is_lead_V3: '',
                                lead_V3_amplitude: '',
                                is_lead_V4: '',
                                lead_V4_amplitude: '',
                                is_lead_V5: '',
                                lead_V5_amplitude: '',
                                is_lead_V6: '',
                                lead_V6_amplitude: '',
                                is_lead_V7: '',
                                lead_V7_amplitude: '',
                                is_lead_V8: '',
                                lead_V8_amplitude: '',
                                is_lead_V9: '',
                                lead_V9_amplitude: ''
                            }
                        }];
                    } else {
                        if (app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[0].is_st_segment_depression != '1') {

                            app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[0].duration = '';
                            app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[0].change_detail.is_lead_I = '';
                            app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[0].change_detail.lead_I_amplitude = '';
                            app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[0].change_detail.is_lead_II = '';
                            app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[0].change_detail.lead_II_amplitude = '';
                            app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[0].change_detail.is_lead_III = '';
                            app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[0].change_detail.lead_III_amplitude = '';
                            app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[0].change_detail.is_lead_aVR = '';
                            app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[0].change_detail.lead_aVR_amplitude = '';
                            app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[0].change_detail.is_lead_aVL = '';
                            app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[0].change_detail.lead_aVL_amplitude = '';
                            app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[0].change_detail.is_lead_aVF = '';
                            app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[0].change_detail.lead_aVF_amplitude = '';
                            app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[0].change_detail.is_lead_V1 = '';
                            app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[0].change_detail.lead_V1_amplitude = '';
                            app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[0].change_detail.is_lead_V2 = '';
                            app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[0].change_detail.lead_V2_amplitude = '';
                            app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[0].change_detail.is_lead_V3 = '';
                            app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[0].change_detail.lead_V3_amplitude = '';
                            app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[0].change_detail.is_lead_V4 = '';
                            app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[0].change_detail.lead_V4_amplitude = '';
                            app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[0].change_detail.is_lead_V5 = '';
                            app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[0].change_detail.lead_V5_amplitude = '';
                            app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[0].change_detail.is_lead_V6 = '';
                            app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[0].change_detail.lead_V6_amplitude = '';
                            app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[0].change_detail.is_lead_V7 = '';
                            app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[0].change_detail.lead_V7_amplitude = '';
                            app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[0].change_detail.is_lead_V8 = '';
                            app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[0].change_detail.lead_V8_amplitude = '';
                            app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[0].change_detail.is_lead_V9 = '';
                            app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[0].change_detail.lead_V9_amplitude = '';
                        } else {
                            if (app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[0].change_detail.is_lead_I != '1') {
                                app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[0].change_detail.lead_I_amplitude = '';
                            }
                            if (app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[0].change_detail.is_lead_II != '1') {
                                app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[0].change_detail.lead_II_amplitude = '';
                            }
                            if (app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[0].change_detail.is_lead_III != '1') {
                                app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[0].change_detail.lead_III_amplitude = '';
                            }
                            if (app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[0].change_detail.is_lead_aVR != '1') {
                                app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[0].change_detail.lead_I_amplitude = '';
                            }
                            if (app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[0].change_detail.is_lead_aVL != '1') {
                                app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[0].change_detail.lead_aVL_amplitude = '';
                            }
                            if (app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[0].change_detail.is_lead_aVF != '1') {
                                app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[0].change_detail.lead_aVF_amplitude = '';
                            }
                            if (app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[0].change_detail.is_lead_V1 != '1') {
                                app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[0].change_detail.lead_V1_amplitude = '';
                            }
                            if (app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[0].change_detail.is_lead_V2 != '1') {
                                app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[0].change_detail.lead_V2_amplitude = '';
                            }
                            if (app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[0].change_detail.is_lead_V3 != '1') {
                                app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[0].change_detail.lead_V3_amplitude = '';
                            }
                            if (app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[0].change_detail.is_lead_V4 != '1') {
                                app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[0].change_detail.lead_V4_amplitude = '';
                            }
                            if (app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[0].change_detail.is_lead_V5 != '1') {
                                app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[0].change_detail.lead_V5_amplitude = '';
                            }
                            if (app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[0].change_detail.is_lead_V6 != '1') {
                                app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[0].change_detail.lead_V6_amplitude = '';
                            }
                            if (app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[0].change_detail.is_lead_V7 != '1') {
                                app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[0].change_detail.lead_V7_amplitude = '';
                            }
                            if (app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[0].change_detail.is_lead_V8 != '1') {
                                app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[0].change_detail.lead_V8_amplitude = '';
                            }
                            if (app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[0].change_detail.is_lead_V9 != '1') {
                                app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[0].change_detail.lead_V9_amplitude = '';
                            }
                        }
                        if (app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[1].is_st_segment_elevation != '1') {
                            app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[1].duration = '';
                            app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[1].change_detail.is_lead_I = '';
                            app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[1].change_detail.lead_I_amplitude = '';
                            app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[1].change_detail.is_lead_II = '';
                            app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[1].change_detail.lead_II_amplitude = '';
                            app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[1].change_detail.is_lead_III = '';
                            app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[1].change_detail.lead_III_amplitude = '';
                            app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[1].change_detail.is_lead_aVR = '';
                            app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[1].change_detail.lead_aVR_amplitude = '';
                            app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[1].change_detail.is_lead_aVL = '';
                            app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[1].change_detail.lead_aVL_amplitude = '';
                            app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[1].change_detail.is_lead_aVF = '';
                            app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[1].change_detail.lead_aVF_amplitude = '';
                            app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[1].change_detail.is_lead_V1 = '';
                            app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[1].change_detail.lead_V1_amplitude = '';
                            app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[1].change_detail.is_lead_V2 = '';
                            app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[1].change_detail.lead_V2_amplitude = '';
                            app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[1].change_detail.is_lead_V3 = '';
                            app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[1].change_detail.lead_V3_amplitude = '';
                            app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[1].change_detail.is_lead_V4 = '';
                            app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[1].change_detail.lead_V4_amplitude = '';
                            app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[1].change_detail.is_lead_V5 = '';
                            app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[1].change_detail.lead_V5_amplitude = '';
                            app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[1].change_detail.is_lead_V6 = '';
                            app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[1].change_detail.lead_V6_amplitude = '';
                            app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[1].change_detail.is_lead_V7 = '';
                            app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[1].change_detail.lead_V7_amplitude = '';
                            app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[1].change_detail.is_lead_V8 = '';
                            app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[1].change_detail.lead_V8_amplitude = '';
                            app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[1].change_detail.is_lead_V9 = '';
                            app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[1].change_detail.lead_V9_amplitude = '';
                        } else {
                            if (app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[1].change_detail.is_lead_I != '1') {
                                app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[1].change_detail.lead_I_amplitude = '';
                            }
                            if (app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[1].change_detail.is_lead_II != '1') {
                                app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[1].change_detail.lead_II_amplitude = '';
                            }
                            if (app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[1].change_detail.is_lead_III != '1') {
                                app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[1].change_detail.lead_III_amplitude = '';
                            }
                            if (app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[1].change_detail.is_lead_aVR != '1') {
                                app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[1].change_detail.lead_I_amplitude = '';
                            }
                            if (app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[1].change_detail.is_lead_aVL != '1') {
                                app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[1].change_detail.lead_aVL_amplitude = '';
                            }
                            if (app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[1].change_detail.is_lead_aVF != '1') {
                                app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[1].change_detail.lead_aVF_amplitude = '';
                            }
                            if (app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[1].change_detail.is_lead_V1 != '1') {
                                app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[1].change_detail.lead_V1_amplitude = '';
                            }
                            if (app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[1].change_detail.is_lead_V2 != '1') {
                                app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[1].change_detail.lead_V2_amplitude = '';
                            }
                            if (app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[1].change_detail.is_lead_V3 != '1') {
                                app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[1].change_detail.lead_V3_amplitude = '';
                            }
                            if (app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[1].change_detail.is_lead_V4 != '1') {
                                app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[1].change_detail.lead_V4_amplitude = '';
                            }
                            if (app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[1].change_detail.is_lead_V5 != '1') {
                                app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[1].change_detail.lead_V5_amplitude = '';
                            }
                            if (app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[1].change_detail.is_lead_V6 != '1') {
                                app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[1].change_detail.lead_V6_amplitude = '';
                            }
                            if (app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[0].change_detail.is_lead_V7 != '1') {
                                app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[0].change_detail.lead_V7_amplitude = '';
                            }
                            if (app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[1].change_detail.is_lead_V8 != '1') {
                                app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[1].change_detail.lead_V8_amplitude = '';
                            }
                            if (app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[1].change_detail.is_lead_V9 != '1') {
                                app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[1].change_detail.lead_V9_amplitude = '';
                            }
                        }
                    }
                    if (app.mr.special_examination.exercise_ecg.t_wave_change.is_t_wave_change != '1') {
                        app.mr.special_examination.exercise_ecg.t_wave_change.duration = '';
                        app.mr.special_examination.exercise_ecg.t_wave_change.change_detail.is_lead_I = '';
                        app.mr.special_examination.exercise_ecg.t_wave_change.change_detail.lead_I_waveforms = '';
                        app.mr.special_examination.exercise_ecg.t_wave_change.change_detail.lead_I_amplitude = '';
                        app.mr.special_examination.exercise_ecg.t_wave_change.change_detail.is_lead_II = '';
                        app.mr.special_examination.exercise_ecg.t_wave_change.change_detail.lead_II_waveforms = '';
                        app.mr.special_examination.exercise_ecg.t_wave_change.change_detail.lead_II_amplitude = '';
                        app.mr.special_examination.exercise_ecg.t_wave_change.change_detail.is_lead_III = '';
                        app.mr.special_examination.exercise_ecg.t_wave_change.change_detail.lead_III_waveforms = '';
                        app.mr.special_examination.exercise_ecg.t_wave_change.change_detail.lead_III_amplitude = '';
                        app.mr.special_examination.exercise_ecg.t_wave_change.change_detail.is_lead_aVR = '';
                        app.mr.special_examination.exercise_ecg.t_wave_change.change_detail.lead_aVR_waveforms = '';
                        app.mr.special_examination.exercise_ecg.t_wave_change.change_detail.lead_aVR_amplitude = '';
                        app.mr.special_examination.exercise_ecg.t_wave_change.change_detail.is_lead_aVL = '';
                        app.mr.special_examination.exercise_ecg.t_wave_change.change_detail.lead_aVL_waveforms = '';
                        app.mr.special_examination.exercise_ecg.t_wave_change.change_detail.lead_aVL_amplitude = '';
                        app.mr.special_examination.exercise_ecg.t_wave_change.change_detail.is_lead_aVF = '';
                        app.mr.special_examination.exercise_ecg.t_wave_change.change_detail.lead_aVF_waveforms = '';
                        app.mr.special_examination.exercise_ecg.t_wave_change.change_detail.lead_aVF_amplitude = '';
                        app.mr.special_examination.exercise_ecg.t_wave_change.change_detail.is_lead_V1 = '';
                        app.mr.special_examination.exercise_ecg.t_wave_change.change_detail.lead_V1_waveforms = '';
                        app.mr.special_examination.exercise_ecg.t_wave_change.change_detail.lead_V1_amplitude = '';
                        app.mr.special_examination.exercise_ecg.t_wave_change.change_detail.is_lead_V2 = '';
                        app.mr.special_examination.exercise_ecg.t_wave_change.change_detail.lead_V2_waveforms = '';
                        app.mr.special_examination.exercise_ecg.t_wave_change.change_detail.lead_V2_amplitude = '';
                        app.mr.special_examination.exercise_ecg.t_wave_change.change_detail.is_lead_V3 = '';
                        app.mr.special_examination.exercise_ecg.t_wave_change.change_detail.lead_V3_waveforms = '';
                        app.mr.special_examination.exercise_ecg.t_wave_change.change_detail.lead_V3_amplitude = '';
                        app.mr.special_examination.exercise_ecg.t_wave_change.change_detail.is_lead_V4 = '';
                        app.mr.special_examination.exercise_ecg.t_wave_change.change_detail.lead_V4_waveforms = '';
                        app.mr.special_examination.exercise_ecg.t_wave_change.change_detail.lead_V4_amplitude = '';
                        app.mr.special_examination.exercise_ecg.t_wave_change.change_detail.is_lead_V5 = '';
                        app.mr.special_examination.exercise_ecg.t_wave_change.change_detail.lead_V5_waveforms = '';
                        app.mr.special_examination.exercise_ecg.t_wave_change.change_detail.lead_V5_amplitude = '';
                        app.mr.special_examination.exercise_ecg.t_wave_change.change_detail.is_lead_V6 = '';
                        app.mr.special_examination.exercise_ecg.t_wave_change.change_detail.lead_V6_waveforms = '';
                        app.mr.special_examination.exercise_ecg.t_wave_change.change_detail.lead_V6_amplitude = '';
                        app.mr.special_examination.exercise_ecg.t_wave_change.change_detail.is_lead_V7 = '';
                        app.mr.special_examination.exercise_ecg.t_wave_change.change_detail.lead_V7_waveforms = '';
                        app.mr.special_examination.exercise_ecg.t_wave_change.change_detail.lead_V7_amplitude = '';
                        app.mr.special_examination.exercise_ecg.t_wave_change.change_detail.is_lead_V8 = '';
                        app.mr.special_examination.exercise_ecg.t_wave_change.change_detail.lead_V8_waveforms = '';
                        app.mr.special_examination.exercise_ecg.t_wave_change.change_detail.lead_V8_amplitude = '';
                        app.mr.special_examination.exercise_ecg.t_wave_change.change_detail.is_lead_V9 = '';
                        app.mr.special_examination.exercise_ecg.t_wave_change.change_detail.lead_V9_waveforms = '';
                        app.mr.special_examination.exercise_ecg.t_wave_change.change_detail.lead_V9_amplitude = '';
                    } else {
                        if (app.mr.special_examination.exercise_ecg.t_wave_change.change_detail.is_lead_I != '1') {
                            app.mr.special_examination.exercise_ecg.t_wave_change.change_detail.lead_I_waveforms = '';
                            app.mr.special_examination.exercise_ecg.t_wave_change.change_detail.lead_I_amplitude = '';
                        }
                        if (app.mr.special_examination.exercise_ecg.t_wave_change.change_detail.is_lead_II != '1') {
                            app.mr.special_examination.exercise_ecg.t_wave_change.change_detail.lead_II_waveforms = '';
                            app.mr.special_examination.exercise_ecg.t_wave_change.change_detail.lead_II_amplitude = '';
                        }
                        if (app.mr.special_examination.exercise_ecg.t_wave_change.change_detail.is_lead_III != '1') {
                            app.mr.special_examination.exercise_ecg.t_wave_change.change_detail.lead_III_waveforms = '';
                            app.mr.special_examination.exercise_ecg.t_wave_change.change_detail.lead_III_amplitude = '';
                        }
                        if (app.mr.special_examination.exercise_ecg.t_wave_change.change_detail.is_lead_aVR != '1') {
                            app.mr.special_examination.exercise_ecg.t_wave_change.change_detail.lead_aVR_waveforms = '';
                            app.mr.special_examination.exercise_ecg.t_wave_change.change_detail.lead_aVR_amplitude = '';
                        }
                        if (app.mr.special_examination.exercise_ecg.t_wave_change.change_detail.is_lead_aVL != '1') {
                            app.mr.special_examination.exercise_ecg.t_wave_change.change_detail.lead_aVL_waveforms = '';
                            app.mr.special_examination.exercise_ecg.t_wave_change.change_detail.lead_aVL_amplitude = '';
                        }
                        if (app.mr.special_examination.exercise_ecg.t_wave_change.change_detail.is_lead_aVF != '1') {
                            app.mr.special_examination.exercise_ecg.t_wave_change.change_detail.lead_aVF_waveforms = '';
                            app.mr.special_examination.exercise_ecg.t_wave_change.change_detail.lead_aVF_amplitude = '';
                        }
                        if (app.mr.special_examination.exercise_ecg.t_wave_change.change_detail.is_lead_V1 != '1') {
                            app.mr.special_examination.exercise_ecg.t_wave_change.change_detail.lead_V1_waveforms = '';
                            app.mr.special_examination.exercise_ecg.t_wave_change.change_detail.lead_V1_amplitude = '';
                        }
                        if (app.mr.special_examination.exercise_ecg.t_wave_change.change_detail.is_lead_V2 != '1') {
                            app.mr.special_examination.exercise_ecg.t_wave_change.change_detail.lead_V2_waveforms = '';
                            app.mr.special_examination.exercise_ecg.t_wave_change.change_detail.lead_V2_amplitude = '';
                        }

                        if (app.mr.special_examination.exercise_ecg.t_wave_change.change_detail.is_lead_V3 != '1') {
                            app.mr.special_examination.exercise_ecg.t_wave_change.change_detail.lead_V3_waveforms = '';
                            app.mr.special_examination.exercise_ecg.t_wave_change.change_detail.lead_V3_amplitude = '';
                        }
                        if (app.mr.special_examination.exercise_ecg.t_wave_change.change_detail.is_lead_V4 != '1') {
                            app.mr.special_examination.exercise_ecg.t_wave_change.change_detail.lead_V4_waveforms = '';
                            app.mr.special_examination.exercise_ecg.t_wave_change.change_detail.lead_V4_amplitude = '';
                        }
                        if (app.mr.special_examination.exercise_ecg.t_wave_change.change_detail.is_lead_V5 != '1') {
                            app.mr.special_examination.exercise_ecg.t_wave_change.change_detail.lead_V5_waveforms = '';
                            app.mr.special_examination.exercise_ecg.t_wave_change.change_detail.lead_V5_amplitude = '';
                        }
                        if (app.mr.special_examination.exercise_ecg.t_wave_change.change_detail.is_lead_V6 != '1') {
                            app.mr.special_examination.exercise_ecg.t_wave_change.change_detail.lead_V6_waveforms = '';
                            app.mr.special_examination.exercise_ecg.t_wave_change.change_detail.lead_V6_amplitude = '';
                        }
                        if (app.mr.special_examination.exercise_ecg.t_wave_change.change_detail.is_lead_V7 != '1') {
                            app.mr.special_examination.exercise_ecg.t_wave_change.change_detail.lead_V7_waveforms = '';
                            app.mr.special_examination.exercise_ecg.t_wave_change.change_detail.lead_V7_amplitude = '';
                        }
                        if (app.mr.special_examination.exercise_ecg.t_wave_change.change_detail.is_lead_V8 != '1') {
                            app.mr.special_examination.exercise_ecg.t_wave_change.change_detail.lead_V8_waveforms = '';
                            app.mr.special_examination.exercise_ecg.t_wave_change.change_detail.lead_V8_amplitude = '';
                        }
                        if (app.mr.special_examination.exercise_ecg.t_wave_change.change_detail.is_lead_V9 != '1') {
                            app.mr.special_examination.exercise_ecg.t_wave_change.change_detail.lead_V9_waveforms = '';
                            app.mr.special_examination.exercise_ecg.t_wave_change.change_detail.lead_V9_amplitude = '';
                        }
                    }


                    if (app.mr.special_examination.holter_ecg.arrhythmia.is_arrhythmia != '1') {
                        app.mr.special_examination.holter_ecg.arrhythmia.frequentness = '';
                        app.mr.special_examination.holter_ecg.arrhythmia.total_abnormal_heartbeats = '';
                        app.mr.special_examination.holter_ecg.arrhythmia.arrhythmia_types = [];
                    } else {
                        var arrhythmia_types = $('#holter_ecg_arrhythmia_repeater').repeaterVal().holter_ecg_arrhythmia;

                        arrhythmia_types.forEach(function(type) {
                            if (type.arrhythmia_type.indexOf('11') < 0) {
                                type.arrhythmia_type_others = '';
                            }
                        })
                        app.mr.special_examination.holter_ecg.arrhythmia.arrhythmia_types = arrhythmia_types;
                    }
                    if (app.mr.special_examination.holter_ecg.pathological_q_wave.is_pathological_q_wave != '1') {
                        app.mr.special_examination.holter_ecg.pathological_q_wave.frequentness = '';
                        app.mr.special_examination.holter_ecg.pathological_q_wave.q_wave_leads_detail = [];
                    } else {
                        var q_wave_leads_detail = $('#holter_ecg_pathological_q_wave_repeater').repeaterVal().holter_ecg_pathological_q_wave;
                        q_wave_leads_detail.forEach(function(lead) {
                            lead.q_wave_leads = lead.q_wave_leads.toString();
                        })
                        app.mr.special_examination.holter_ecg.pathological_q_wave.q_wave_leads_detail = q_wave_leads_detail;
                    }

                    if (app.mr.special_examination.holter_ecg.st_segment_change.is_st_segment_change != '1') {
                        app.mr.special_examination.holter_ecg.st_segment_change.st_segment_changes = [{
                            is_st_segment_depression: '',
                            frequentness: '',
                            changes_detail: []
                        }, {
                            is_st_segment_depression: '',
                            frequentness: '',
                            changes_detail: []
                        }]
                    } else {
                        if (app.mr.special_examination.holter_ecg.st_segment_change.st_segment_changes[0].is_st_segment_depression != '1') {
                            app.mr.special_examination.holter_ecg.st_segment_change.st_segment_changes[0].frequentness = '';
                            app.mr.special_examination.holter_ecg.st_segment_change.st_segment_changes[0].changes_detail = [];
                        } else {
                            var changes_detail = $('#holter_ecg_st_segment_depression_repeater').repeaterVal().holter_ecg_st_segment_depression;
                            changes_detail.forEach(function(change) {
                                change.is_lead_I = change.is_lead_I.toString();
                                change.is_lead_II = change.is_lead_II.toString();
                                change.is_lead_III = change.is_lead_III.toString();
                                change.is_lead_aVF = change.is_lead_aVF.toString();
                                change.is_lead_aVL = change.is_lead_aVL.toString();
                                change.is_lead_aVR = change.is_lead_aVR.toString();
                                change.is_lead_V1 = change.is_lead_V1.toString();
                                change.is_lead_V2 = change.is_lead_V2.toString();
                                change.is_lead_V3 = change.is_lead_V3.toString();
                                change.is_lead_V4 = change.is_lead_V4.toString();
                                change.is_lead_V5 = change.is_lead_V5.toString();
                                change.is_lead_V6 = change.is_lead_V6.toString();
                                change.is_lead_V7 = change.is_lead_V7.toString();
                                change.is_lead_V8 = change.is_lead_V8.toString();
                                change.is_lead_V9 = change.is_lead_V9.toString();
                                if (change.is_lead_I != '1') {
                                    change.lead_I_amplitude = '';
                                }
                                if (change.is_lead_II != '1') {
                                    change.lead_II_amplitude = '';
                                }
                                if (change.is_lead_III != '1') {
                                    change.lead_III_amplitude = '';
                                }
                                if (change.is_lead_aVF != '1') {
                                    change.lead_aVF_amplitude = '';
                                }
                                if (change.is_lead_aVL != '1') {
                                    change.lead_aVL_amplitude = '';
                                }
                                if (change.is_lead_aVR != '1') {
                                    change.lead_aVR_amplitude = '';
                                }
                                if (change.is_lead_V1 != '1') {
                                    change.lead_V1_amplitude = '';
                                }
                                if (change.is_lead_V2 != '1') {
                                    change.lead_V2_amplitude = '';
                                }
                                if (change.is_lead_V3 != '1') {
                                    change.lead_V3_amplitude = '';
                                }
                                if (change.is_lead_V4 != '1') {
                                    change.lead_V4_amplitude = '';
                                }
                                if (change.is_lead_V5 != '1') {
                                    change.lead_V5_amplitude = '';
                                }
                                if (change.is_lead_V6 != '1') {
                                    change.lead_V6_amplitude = '';
                                }
                                if (change.is_lead_V7 != '1') {
                                    change.lead_V7_amplitude = '';
                                }
                                if (change.is_lead_V8 != '1') {
                                    change.lead_V8_amplitude = '';
                                }
                                if (change.is_lead_V9 != '1') {
                                    change.lead_V9_amplitude = '';
                                }
                            })
                            app.mr.special_examination.holter_ecg.st_segment_change.st_segment_changes[0].changes_detail = changes_detail;
                        }
                        if (app.mr.special_examination.holter_ecg.st_segment_change.st_segment_changes[1].is_st_segment_elevation != '1') {
                            app.mr.special_examination.holter_ecg.st_segment_change.st_segment_changes[1].frequentness = '';
                            app.mr.special_examination.holter_ecg.st_segment_change.st_segment_changes[1].changes_detail = [];
                        } else {
                            var changes_detail = $('#holter_ecg_st_segment_elevation_repeater').repeaterVal().holter_ecg_st_segment_elevation;
                            changes_detail.forEach(function(change) {
                                change.is_lead_I = change.is_lead_I.toString();
                                change.is_lead_II = change.is_lead_II.toString();
                                change.is_lead_III = change.is_lead_III.toString();
                                change.is_lead_aVF = change.is_lead_aVF.toString();
                                change.is_lead_aVL = change.is_lead_aVL.toString();
                                change.is_lead_aVR = change.is_lead_aVR.toString();
                                change.is_lead_V1 = change.is_lead_V1.toString();
                                change.is_lead_V2 = change.is_lead_V2.toString();
                                change.is_lead_V3 = change.is_lead_V3.toString();
                                change.is_lead_V4 = change.is_lead_V4.toString();
                                change.is_lead_V5 = change.is_lead_V5.toString();
                                change.is_lead_V6 = change.is_lead_V6.toString();
                                change.is_lead_V7 = change.is_lead_V7.toString();
                                change.is_lead_V8 = change.is_lead_V8.toString();
                                change.is_lead_V9 = change.is_lead_V9.toString();
                                if (change.is_lead_I != '1') {
                                    change.lead_I_amplitude = '';
                                }
                                if (change.is_lead_II != '1') {
                                    change.lead_II_amplitude = '';
                                }
                                if (change.is_lead_III != '1') {
                                    change.lead_III_amplitude = '';
                                }
                                if (change.is_lead_aVF != '1') {
                                    change.lead_aVF_amplitude = '';
                                }
                                if (change.is_lead_aVL != '1') {
                                    change.lead_aVL_amplitude = '';
                                }
                                if (change.is_lead_aVR != '1') {
                                    change.lead_aVR_amplitude = '';
                                }
                                if (change.is_lead_V1 != '1') {
                                    change.lead_V1_amplitude = '';
                                }
                                if (change.is_lead_V2 != '1') {
                                    change.lead_V2_amplitude = '';
                                }
                                if (change.is_lead_V3 != '1') {
                                    change.lead_V3_amplitude = '';
                                }
                                if (change.is_lead_V4 != '1') {
                                    change.lead_V4_amplitude = '';
                                }
                                if (change.is_lead_V5 != '1') {
                                    change.lead_V5_amplitude = '';
                                }
                                if (change.is_lead_V6 != '1') {
                                    change.lead_V6_amplitude = '';
                                }
                                if (change.is_lead_V7 != '1') {
                                    change.lead_V7_amplitude = '';
                                }
                                if (change.is_lead_V8 != '1') {
                                    change.lead_V8_amplitude = '';
                                }
                                if (change.is_lead_V9 != '1') {
                                    change.lead_V9_amplitude = '';
                                }
                            })
                            app.mr.special_examination.holter_ecg.st_segment_change.st_segment_changes[1].changes_detail = changes_detail;
                        }
                    }

                    if (app.mr.special_examination.holter_ecg.t_wave_change.is_t_wave_change != '1') {
                        app.mr.special_examination.holter_ecg.t_wave_change.frequentness = '';
                        app.mr.special_examination.holter_ecg.t_wave_change.changes_detail = [];
                    } else {
                        var changes_detail = $('#holter_ecg_t_wave_change_repeater').repeaterVal().holter_ecg_t_wave_change;
                        changes_detail.forEach(function(change) {
                            change.is_lead_I = change.is_lead_I.toString();
                            change.is_lead_II = change.is_lead_II.toString();
                            change.is_lead_III = change.is_lead_III.toString();
                            change.is_lead_aVF = change.is_lead_aVF.toString();
                            change.is_lead_aVL = change.is_lead_aVL.toString();
                            change.is_lead_aVR = change.is_lead_aVR.toString();
                            change.is_lead_V1 = change.is_lead_V1.toString();
                            change.is_lead_V2 = change.is_lead_V2.toString();
                            change.is_lead_V3 = change.is_lead_V3.toString();
                            change.is_lead_V4 = change.is_lead_V4.toString();
                            change.is_lead_V5 = change.is_lead_V5.toString();
                            change.is_lead_V6 = change.is_lead_V6.toString();
                            change.is_lead_V7 = change.is_lead_V7.toString();
                            change.is_lead_V8 = change.is_lead_V8.toString();
                            change.is_lead_V9 = change.is_lead_V9.toString();
                            if (change.is_lead_I != '1') {
                                change.lead_I_amplitude = '';
                                change.lead_I_waveforms = '';
                            }
                            if (change.is_lead_II != '1') {
                                change.lead_II_amplitude = '';
                                change.lead_II_waveforms = '';
                            }
                            if (change.is_lead_III != '1') {
                                change.lead_III_amplitude = '';
                                change.lead_III_waveforms = '';
                            }
                            if (change.is_lead_aVF != '1') {
                                change.lead_aVF_amplitude = '';
                                change.lead_aVF_waveforms = '';
                            }
                            if (change.is_lead_aVL != '1') {
                                change.lead_aVL_amplitude = '';
                                change.lead_aVL_waveforms = '';
                            }
                            if (change.is_lead_aVR != '1') {
                                change.lead_aVR_amplitude = '';
                                change.lead_aVR_waveforms = '';
                            }
                            if (change.is_lead_V1 != '1') {
                                change.lead_V1_amplitude = '';
                                change.lead_V1_waveforms = '';
                            }
                            if (change.is_lead_V2 != '1') {
                                change.lead_V2_amplitude = '';
                                change.lead_V2_waveforms = '';
                            }
                            if (change.is_lead_V3 != '1') {
                                change.lead_V3_amplitude = '';
                                change.lead_V3_waveforms = '';
                            }
                            if (change.is_lead_V4 != '1') {
                                change.lead_V4_amplitude = '';
                                change.lead_V4_waveforms = '';
                            }
                            if (change.is_lead_V5 != '1') {
                                change.lead_V5_amplitude = '';
                                change.lead_V5_waveforms = '';
                            }
                            if (change.is_lead_V6 != '1') {
                                change.lead_V6_amplitude = '';
                                change.lead_V6_waveforms = '';
                            }
                            if (change.is_lead_V7 != '1') {
                                change.lead_V7_amplitude = '';
                                change.lead_V7_waveforms = '';
                            }
                            if (change.is_lead_V8 != '1') {
                                change.lead_V8_amplitude = '';
                                change.lead_V8_waveforms = '';
                            }
                            if (change.is_lead_V9 != '1') {
                                change.lead_V9_amplitude = '';
                                change.lead_V9_waveforms = '';
                            }
                        })
                        app.mr.special_examination.holter_ecg.t_wave_change.changes_detail = changes_detail;
                    }

                    if (app.mr.special_examination.ucg.is_LVEF_lt_forty_percent != '1') {
                        app.mr.special_examination.ucg.EF = '';
                        app.mr.special_examination.ucg.ratio_E_to_A = '';
                    }
                    if (app.mr.special_examination.ucg.is_local_motion_abnormality != '1') {
                        app.mr.special_examination.ucg.local_motion_abnormality_parts = '';
                    }
                    if (app.mr.special_examination.ucg.is_vntricular_aneurysm != '1') {
                        app.mr.special_examination.ucg.vntricular_aneurysm_parts = '';
                    }
                    if (app.mr.special_examination.ucg.is_left_ventricular_thrombosis != '1') {
                        app.mr.special_examination.ucg.left_ventricular_thrombosis_parts = '';
                    }

                    if (app.mr.special_examination.pci.contrast_media.indexOf('5') < 0) {
                        app.mr.special_examination.pci.contrast_media_others = '';
                    }

                    app.mr.special_examination.pci.segmental_lesions = $('#segmental_lesions_repeater').repeaterVal().segmental_lesions;
                    //特殊检查部分数据处理结束


                    //入院诊断部分数据处理开始
                    if (app.mr.admission_diagnosis.is_acute_myocardial_infarction != '1') {
                        app.mr.admission_diagnosis.acute_myocardial_infarction_part = '';
                    }
                    if (app.mr.admission_diagnosis.is_subacute_myocardial_infarction != '1') {
                        app.mr.admission_diagnosis.subacute_myocardial_infarction_part = '';
                    }
                    if (app.mr.admission_diagnosis.is_old_myocardial_infarction != '1') {
                        app.mr.admission_diagnosis.old_myocardial_infarction_part = '';
                    }
                    if (app.mr.admission_diagnosis.is_effort_angina != '1') {
                        app.mr.admission_diagnosis.effort_angina_pectoris_ccs = '';
                    }
                    if (app.mr.admission_diagnosis.is_diagnosis_others != '1') {
                        app.mr.admission_diagnosis.diagnosis_others = '';
                    }
                    //入院诊断部分数据处理结束

                    //出院诊断部分数据处理开始
                    if (app.mr.discharge_diagnosis.is_acute_myocardial_infarction != '1') {
                        app.mr.discharge_diagnosis.acute_myocardial_infarction_part = '';
                    }
                    if (app.mr.discharge_diagnosis.is_subacute_myocardial_infarction != '1') {
                        app.mr.discharge_diagnosis.subacute_myocardial_infarction_part = '';
                    }
                    if (app.mr.discharge_diagnosis.is_old_myocardial_infarction != '1') {
                        app.mr.discharge_diagnosis.old_myocardial_infarction_part = '';
                    }
                    if (app.mr.discharge_diagnosis.is_effort_angina != '1') {
                        app.mr.discharge_diagnosis.effort_angina_pectoris_ccs = '';
                    }
                    if (app.mr.discharge_diagnosis.is_diagnosis_others != '1') {
                        app.mr.discharge_diagnosis.diagnosis_others = '';
                    }
                    //出院诊断部分数据处理结束
                    console.log(app.mr);
                    bootbox.confirm({
                        message: "是否提交当前页面填写的所有数据？",
                        buttons: {
                            confirm: {
                                label: '确定',
                                className: 'btn-success'
                            },
                            cancel: {
                                label: '取消',
                                className: 'btn-danger'
                            }
                        },
                        callback: function(result) {
                            console.log(result);
                            if (result) {
                                location.href = "./emrs_medical_record_detail.html"
                            }
                        }
                    });

                }).hide();

                //apply validation on select2 dropdown value change, this only needed for chosen dropdown integration.
                $('input').on('ifChecked', function(event) {
                    form.validate().element($(this));
                });
                $('#patient_type_list', form).change(function() {
                    form.validate().element($(this)); //revalidate the chosen dropdown value and show error or success message for the input
                });
                $('#doctor_list', form).change(function() {
                    form.validate().element($(this)); //revalidate the chosen dropdown value and show error or success message for the input
                });
                $('#recorder_list', form).change(function() {
                    form.validate().element($(this)); //revalidate the chosen dropdown value and show error or success message for the input
                });

            }

        };

    }();

    var FormiCheck = function() {
        return {
            //main function to initiate the module        
            init: function() {
                $('input').iCheck({
                    checkboxClass: 'icheckbox_square-blue',
                    radioClass: 'iradio_flat-blue',
                    increaseArea: '20%' // optional
                });

                //基本信息部分开始
                $("input[name='gender']").on('ifChanged', function(event) {
                    app.mr.basic_info.patient.gender = $("input[name='gender']:checked").val();
                });
                //基本信息部分结束
                //现病史部分开始
                $("input[name='care_cause']").on('ifChanged', function(event) {
                    var care_causes = [];
                    $("input[name='care_cause']:checked").each(function() {
                        care_causes.push($(this).val());
                    });
                    app.mr.history_of_present_illness.care_causes = care_causes.toString();
                });
                $("input[name='is_angina_pectoris']").on('ifChanged', function(event) {
                    app.mr.history_of_present_illness.is_angina_pectoris = $("input[name='is_angina_pectoris']:checked").val();
                });
                $("input[name='is_exertional_angina_attacks_within_4_weeks']").on('ifChanged', function(event) {
                    app.mr.history_of_present_illness.is_exertional_angina_attacks_within_4_weeks = $("input[name='is_exertional_angina_attacks_within_4_weeks']:checked").val();
                });
                //现病史部分结束
                //危险因素部分开始
                $("input[name='is_somking']").on('ifChanged', function(event) {
                    app.mr.risk_factors.smoking.is_somking = $("input[name='is_somking']:checked").val();
                });
                $("input[name='is_smoking_cessation']").on('ifChanged', function(event) {
                    app.mr.risk_factors.smoking.is_smoking_cessation = $("input[name='is_smoking_cessation']:checked").val();
                });
                $("input[name='is_drinking']").on('ifChanged', function(event) {
                    app.mr.risk_factors.drinking.is_drinking = $("input[name='is_drinking']:checked").val();
                });
                $("input[name='is_temperance']").on('ifChanged', function(event) {
                    app.mr.risk_factors.drinking.is_temperance = $("input[name='is_temperance']:checked").val();
                });
                $("input[name='is_longterm_psychological_stress']").on('ifChanged', function(event) {
                    app.mr.risk_factors.psychosocial_factors.is_longterm_psychological_stress = $("input[name='is_longterm_psychological_stress']:checked").val();
                });
                $("input[name='is_depression']").on('ifChanged', function(event) {
                    app.mr.risk_factors.psychosocial_factors.is_depression = $("input[name='is_depression']:checked").val();
                });
                $("input[name='is_central_obesity']").on('ifChanged', function(event) {
                    app.mr.risk_factors.central_obesity.is_central_obesity = $("input[name='is_central_obesity']:checked").val();
                });
                //危险因素部分结束
                //既往病史部分开始                
                $("input[name='is_lipid_abnormality']").on('ifChanged', function(event) {
                    app.mr.anamnesis.lipid_abnormality.is_lipid_abnormality = $("input[name='is_lipid_abnormality']:checked").val();
                });
                $("input[name='is_lipid_abnormality_under_treatment']").on('ifChanged', function(event) {
                    app.mr.anamnesis.lipid_abnormality.is_under_treatment = $("input[name='is_lipid_abnormality_under_treatment']:checked").val();
                });
                $("input[name='is_essential_hypertension']").on('ifChanged', function(event) {
                    app.mr.anamnesis.essential_hypertension.is_essential_hypertension = $("input[name='is_essential_hypertension']:checked").val();
                });
                $("input[name='is_essential_hypertension_under_treatment']").on('ifChanged', function(event) {
                    app.mr.anamnesis.essential_hypertension.is_under_treatment = $("input[name='is_essential_hypertension_under_treatment']:checked").val();
                });
                $("input[name='is_dysglycemia']").on('ifChanged', function(event) {
                    app.mr.anamnesis.dysglycemia.is_dysglycemia = $("input[name='is_dysglycemia']:checked").val();
                });
                $("input[name='is_diabetes_mellitus']").on('ifChanged', function(event) {
                    app.mr.anamnesis.dysglycemia.diabetes_mellitus.is_diabetes_mellitus = $("input[name='is_diabetes_mellitus']:checked").val();
                });
                $("input[name='is_diabetes_mellitus_under_treatment']").on('ifChanged', function(event) {
                    app.mr.anamnesis.dysglycemia.diabetes_mellitus.is_under_treatment = $("input[name='is_diabetes_mellitus_under_treatment']:checked").val();
                });
                $("input[name='is_gout']").on('ifChanged', function(event) {
                    app.mr.anamnesis.gout.is_gout = $("input[name='is_gout']:checked").val();
                });
                $("input[name='is_renal_insufficiency']").on('ifChanged', function(event) {
                    app.mr.anamnesis.gout.renal_insufficiency.is_renal_insufficiency = $("input[name='is_renal_insufficiency']:checked").val();
                });
                $("input[name='is_old_myocardial_infarction']").on('ifChanged', function(event) {
                    app.mr.anamnesis.heart_diseases.old_myocardial_infarction.is_old_myocardial_infarction = $("input[name='is_old_myocardial_infarction']:checked").val();
                });
                $("input[name='is_pci_history']").on('ifChanged', function(event) {
                    app.mr.anamnesis.heart_diseases.is_pci_history = $("input[name='is_pci_history']:checked").val();
                });
                $("input[name='is_cabg_history']").on('ifChanged', function(event) {
                    app.mr.anamnesis.heart_diseases.is_cabg_history = $("input[name='is_cabg_history']:checked").val();
                });
                $("input[name='is_cas_gt50_history']").on('ifChanged', function(event) {
                    app.mr.anamnesis.heart_diseases.is_cas_gt50_history = $("input[name='is_cas_gt50_history']:checked").val();
                });
                $("input[name='is_atrial_fibrillation']").on('ifChanged', function(event) {
                    app.mr.anamnesis.heart_diseases.is_atrial_fibrillation = $("input[name='is_atrial_fibrillation']:checked").val();
                });
                $("input[name='is_other_heart_disease_history']").on('ifChanged', function(event) {
                    app.mr.anamnesis.heart_diseases.other_heart_disease.is_other_heart_disease_history = $("input[name='is_other_heart_disease_history']:checked").val();
                });
                $("input[name='is_deep_venou_thrombosis']").on('ifChanged', function(event) {
                    app.mr.anamnesis.deep_venou_thrombosis.is_deep_venou_thrombosis = $("input[name='is_deep_venou_thrombosis']:checked").val();
                });
                $("input[name='deep_venou_thrombosis_diagnosis_result']").on('ifChanged', function(event) {
                    app.mr.anamnesis.deep_venou_thrombosis.diagnosis_result = $("input[name='deep_venou_thrombosis_diagnosis_result']:checked").val();
                });
                $("input[name='is_old_ischemic_stroke']").on('ifChanged', function(event) {
                    app.mr.anamnesis.old_ischemic_stroke.is_old_ischemic_stroke = $("input[name='is_old_ischemic_stroke']:checked").val();
                });
                $("input[name='is_vascular_diseases']").on('ifChanged', function(event) {
                    app.mr.anamnesis.vascular_diseases.is_vascular_diseases = $("input[name='is_vascular_diseases']:checked").val();
                });
                $("input[name='is_hemorrhage']").on('ifChanged', function(event) {
                    app.mr.anamnesis.hemorrhage.is_hemorrhage = $("input[name='is_hemorrhage']:checked").val();
                });
                $("input[name='is_bleeding']").on('ifChanged', function(event) {
                    app.mr.anamnesis.bleeding.is_bleeding = $("input[name='is_bleeding']:checked").val();
                });
                //既往病史部分结束
                //家族史部分开始
                $("input[name='is_premature_chd']").on('ifChanged', function(event) {
                    app.family_history.is_premature_chd = $("input[name='is_premature_chd']:checked").val();
                });
                $("input[name='is_myocardial_infarction']").on('ifChanged', function(event) {
                    app.family_history.is_myocardial_infarction = $("input[name='is_myocardial_infarction']:checked").val();
                });
                $("input[name='is_ischemic_stroke']").on('ifChanged', function(event) {
                    app.family_history.is_ischemic_stroke = $("input[name='is_ischemic_stroke']:checked").val();
                });
                $("input[name='is_hemorrhagic_stroke']").on('ifChanged', function(event) {
                    app.family_history.is_hemorrhagic_stroke = $("input[name='is_hemorrhagic_stroke']:checked").val();
                });
                $("input[name='is_sudden_death']").on('ifChanged', function(event) {
                    app.family_history.is_sudden_death = $("input[name='is_sudden_death']:checked").val();
                });
                //家族史部分结束
                //体格检查部分结束
                $("input[name='is_breath_sounds_normal']").on('ifChanged', function(event) {
                    app.mr.physical_examination.is_breath_sounds_normal = $("input[name='is_breath_sounds_normal']:checked").val();
                });
                $("input[name='is_lung_wet_rales']").on('ifChanged', function(event) {
                    app.mr.physical_examination.is_lung_wet_rales = $("input[name='is_lung_wet_rales']:checked").val();
                });
                $("input[name='cardiac_rhythm']").on('ifChanged', function(event) {
                    app.mr.physical_examination.cardiac_rhythm = $("input[name='cardiac_rhythm']:checked").val();
                });
                $("input[name='is_S3S4_gallop_rhythm']").on('ifChanged', function(event) {
                    app.mr.physical_examination.is_S3S4_gallop_rhythm = $("input[name='is_S3S4_gallop_rhythm']:checked").val();
                });
                $("input[name='is_heart_failure']").on('ifChanged', function(event) {
                    app.mr.physical_examination.is_heart_failure = $("input[name='is_heart_failure']:checked").val();
                });
                $("input[name='is_ear_lobe_longitudinal_crack']").on('ifChanged', function(event) {
                    app.mr.physical_examination.is_ear_lobe_longitudinal_crack = $("input[name='is_ear_lobe_longitudinal_crack']:checked").val();
                });
                $("input[name='is_skin_yellow_pigment_tumor']").on('ifChanged', function(event) {
                    app.mr.physical_examination.is_skin_yellow_pigment_tumor = $("input[name='is_skin_yellow_pigment_tumor']:checked").val();
                });
                $("input[name='is_alopecia']").on('ifChanged', function(event) {
                    app.mr.physical_examination.is_alopecia = $("input[name='is_alopecia']:checked").val();
                });
                //体格检查部分结束
                //常规检查部分开始
                $("input[name='is_serum_myocardial_necrosis_markers_up']").on('ifChanged', function(event) {
                    app.mr.routine_examination.blood_biochemistry.is_serum_myocardial_necrosis_markers_up = $("input[name='is_serum_myocardial_necrosis_markers_up']:checked").val();
                });
                $("input[name='is_inflammatory_markers_up']").on('ifChanged', function(event) {
                    app.mr.routine_examination.blood_biochemistry.is_inflammatory_markers_up = $("input[name='is_inflammatory_markers_up']:checked").val();
                });
                $("input[name='is_abnormal_liver_function']").on('ifChanged', function(event) {
                    app.mr.routine_examination.blood_biochemistry.is_abnormal_liver_function = $("input[name='is_abnormal_liver_function']:checked").val();
                });
                $("input[name='is_renal_insufficiency']").on('ifChanged', function(event) {
                    app.mr.routine_examination.blood_biochemistry.is_renal_insufficiency = $("input[name='is_renal_insufficiency']:checked").val();
                });
                $("input[name='is_hepatorenal_disease']").on('ifChanged', function(event) {
                    app.mr.routine_examination.blood_biochemistry.is_hepatorenal_disease = $("input[name='is_hepatorenal_disease']:checked").val();
                });
                $("input[name='is_qualitative_plateletdefects']").on('ifChanged', function(event) {
                    app.mr.routine_examination.blood_routine.is_qualitative_plateletdefects = $("input[name='is_qualitative_plateletdefects']:checked").val();
                });
                //常规检查部分结束
                //特殊检查部分开始
                $("input[name='ecg_is_pathological_q_wave']").on('ifChanged', function(event) {
                    app.mr.special_examination.ecg.pathological_q_wave.is_pathological_q_wave = $("input[name='ecg_is_pathological_q_wave']:checked").val();
                });
                $("input[name='ecg_is_st_segment_change']").on('ifChanged', function(event) {
                    app.mr.special_examination.ecg.st_segment_change.is_st_segment_change = $("input[name='ecg_is_st_segment_change']:checked").val();
                });
                $("input[name='ecg_is_st_segment_depression']").on('ifChanged', function(event) {
                    app.mr.special_examination.ecg.st_segment_change.st_segment_changes[0].is_st_segment_depression = $("input[name='ecg_is_st_segment_depression']:checked").val();
                });
                $("input[name='ecg_is_st_segment_elevation']").on('ifChanged', function(event) {
                    app.mr.special_examination.ecg.st_segment_change.st_segment_changes[1].is_st_segment_elevation = $("input[name='ecg_is_st_segment_elevation']:checked").val();
                });
                $("input[name='ecg_st_segment_depression_is_lead_I']").on('ifChanged', function(event) {
                    var flag = [];
                    $("input[name='ecg_st_segment_depression_is_lead_I']:checked").each(function() {
                        flag.push($(this).val());
                    });
                    app.mr.special_examination.ecg.st_segment_change.st_segment_changes[0].change_detail.is_lead_I = flag.toString();
                });
                $("input[name='ecg_st_segment_depression_is_lead_II']").on('ifChanged', function(event) {
                    var flag = [];
                    $("input[name='ecg_st_segment_depression_is_lead_II']:checked").each(function() {
                        flag.push($(this).val());
                    });
                    app.mr.special_examination.ecg.st_segment_change.st_segment_changes[0].change_detail.is_lead_II = flag.toString();
                });
                $("input[name='ecg_st_segment_depression_is_lead_III']").on('ifChanged', function(event) {
                    var flag = [];
                    $("input[name='ecg_st_segment_depression_is_lead_III']:checked").each(function() {
                        flag.push($(this).val());
                    });
                    app.mr.special_examination.ecg.st_segment_change.st_segment_changes[0].change_detail.is_lead_III = flag.toString();
                });
                $("input[name='ecg_st_segment_depression_is_lead_aVR']").on('ifChanged', function(event) {
                    var flag = [];
                    $("input[name='ecg_st_segment_depression_is_lead_aVR']:checked").each(function() {
                        flag.push($(this).val());
                    });
                    app.mr.special_examination.ecg.st_segment_change.st_segment_changes[0].change_detail.is_lead_aVR = flag.toString();
                });
                $("input[name='ecg_st_segment_depression_is_lead_aVL']").on('ifChanged', function(event) {
                    var flag = [];
                    $("input[name='ecg_st_segment_depression_is_lead_aVL']:checked").each(function() {
                        flag.push($(this).val());
                    });
                    app.mr.special_examination.ecg.st_segment_change.st_segment_changes[0].change_detail.is_lead_aVL = flag.toString();
                });
                $("input[name='ecg_st_segment_depression_is_lead_aVF']").on('ifChanged', function(event) {
                    var flag = [];
                    $("input[name='ecg_st_segment_depression_is_lead_aVF']:checked").each(function() {
                        flag.push($(this).val());
                    });
                    app.mr.special_examination.ecg.st_segment_change.st_segment_changes[0].change_detail.is_lead_aVF = flag.toString();
                });
                $("input[name='ecg_st_segment_depression_is_lead_V1']").on('ifChanged', function(event) {
                    var flag = [];
                    $("input[name='ecg_st_segment_depression_is_lead_V1']:checked").each(function() {
                        flag.push($(this).val());
                    });
                    app.mr.special_examination.ecg.st_segment_change.st_segment_changes[0].change_detail.is_lead_V1 = flag.toString();
                });
                $("input[name='ecg_st_segment_depression_is_lead_V2']").on('ifChanged', function(event) {
                    var flag = [];
                    $("input[name='ecg_st_segment_depression_is_lead_V2']:checked").each(function() {
                        flag.push($(this).val());
                    });
                    app.mr.special_examination.ecg.st_segment_change.st_segment_changes[0].change_detail.is_lead_V2 = flag.toString();
                });
                $("input[name='ecg_st_segment_depression_is_lead_V3']").on('ifChanged', function(event) {
                    var flag = [];
                    $("input[name='ecg_st_segment_depression_is_lead_V3']:checked").each(function() {
                        flag.push($(this).val());
                    });
                    app.mr.special_examination.ecg.st_segment_change.st_segment_changes[0].change_detail.is_lead_V3 = flag.toString();
                });
                $("input[name='ecg_st_segment_depression_is_lead_V4']").on('ifChanged', function(event) {
                    var flag = [];
                    $("input[name='ecg_st_segment_depression_is_lead_V4']:checked").each(function() {
                        flag.push($(this).val());
                    });
                    app.mr.special_examination.ecg.st_segment_change.st_segment_changes[0].change_detail.is_lead_V4 = flag.toString();
                });
                $("input[name='ecg_st_segment_depression_is_lead_V5']").on('ifChanged', function(event) {
                    var flag = [];
                    $("input[name='ecg_st_segment_depression_is_lead_V5']:checked").each(function() {
                        flag.push($(this).val());
                    });
                    app.mr.special_examination.ecg.st_segment_change.st_segment_changes[0].change_detail.is_lead_V5 = flag.toString();
                });
                $("input[name='ecg_st_segment_depression_is_lead_V6']").on('ifChanged', function(event) {
                    var flag = [];
                    $("input[name='ecg_st_segment_depression_is_lead_V6']:checked").each(function() {
                        flag.push($(this).val());
                    });
                    app.mr.special_examination.ecg.st_segment_change.st_segment_changes[0].change_detail.is_lead_V6 = flag.toString();
                });
                $("input[name='ecg_st_segment_depression_is_lead_V7']").on('ifChanged', function(event) {
                    var flag = [];
                    $("input[name='ecg_st_segment_depression_is_lead_V7']:checked").each(function() {
                        flag.push($(this).val());
                    });
                    app.mr.special_examination.ecg.st_segment_change.st_segment_changes[0].change_detail.is_lead_V7 = flag.toString();
                });
                $("input[name='ecg_st_segment_depression_is_lead_V8']").on('ifChanged', function(event) {
                    var flag = [];
                    $("input[name='ecg_st_segment_depression_is_lead_V8']:checked").each(function() {
                        flag.push($(this).val());
                    });
                    app.mr.special_examination.ecg.st_segment_change.st_segment_changes[0].change_detail.is_lead_V8 = flag.toString();
                });
                $("input[name='ecg_st_segment_depression_is_lead_V9']").on('ifChanged', function(event) {
                    var flag = [];
                    $("input[name='ecg_st_segment_depression_is_lead_V9']:checked").each(function() {
                        flag.push($(this).val());
                    });
                    app.mr.special_examination.ecg.st_segment_change.st_segment_changes[0].change_detail.is_lead_V9 = flag.toString();
                });

                $("input[name='ecg_st_segment_elevation_is_lead_I']").on('ifChanged', function(event) {
                    var flag = [];
                    $("input[name='ecg_st_segment_elevation_is_lead_I']:checked").each(function() {
                        flag.push($(this).val());
                    });
                    app.mr.special_examination.ecg.st_segment_change.st_segment_changes[1].change_detail.is_lead_I = flag.toString();
                });
                $("input[name='ecg_st_segment_elevation_is_lead_II']").on('ifChanged', function(event) {
                    var flag = [];
                    $("input[name='ecg_st_segment_elevation_is_lead_II']:checked").each(function() {
                        flag.push($(this).val());
                    });
                    app.mr.special_examination.ecg.st_segment_change.st_segment_changes[1].change_detail.is_lead_II = flag.toString();
                });
                $("input[name='ecg_st_segment_elevation_is_lead_III']").on('ifChanged', function(event) {
                    var flag = [];
                    $("input[name='ecg_st_segment_elevation_is_lead_III']:checked").each(function() {
                        flag.push($(this).val());
                    });
                    app.mr.special_examination.ecg.st_segment_change.st_segment_changes[1].change_detail.is_lead_III = flag.toString();
                });
                $("input[name='ecg_st_segment_elevation_is_lead_aVR']").on('ifChanged', function(event) {
                    var flag = [];
                    $("input[name='ecg_st_segment_elevation_is_lead_aVR']:checked").each(function() {
                        flag.push($(this).val());
                    });
                    app.mr.special_examination.ecg.st_segment_change.st_segment_changes[1].change_detail.is_lead_aVR = flag.toString();
                });
                $("input[name='ecg_st_segment_elevation_is_lead_aVL']").on('ifChanged', function(event) {
                    var flag = [];
                    $("input[name='ecg_st_segment_elevation_is_lead_aVL']:checked").each(function() {
                        flag.push($(this).val());
                    });
                    app.mr.special_examination.ecg.st_segment_change.st_segment_changes[1].change_detail.is_lead_aVL = flag.toString();
                });
                $("input[name='ecg_st_segment_elevation_is_lead_aVF']").on('ifChanged', function(event) {
                    var flag = [];
                    $("input[name='ecg_st_segment_elevation_is_lead_aVF']:checked").each(function() {
                        flag.push($(this).val());
                    });
                    app.mr.special_examination.ecg.st_segment_change.st_segment_changes[1].change_detail.is_lead_aVF = flag.toString();
                });
                $("input[name='ecg_st_segment_elevation_is_lead_V1']").on('ifChanged', function(event) {
                    var flag = [];
                    $("input[name='ecg_st_segment_elevation_is_lead_V1']:checked").each(function() {
                        flag.push($(this).val());
                    });
                    app.mr.special_examination.ecg.st_segment_change.st_segment_changes[1].change_detail.is_lead_V1 = flag.toString();
                });
                $("input[name='ecg_st_segment_elevation_is_lead_V2']").on('ifChanged', function(event) {
                    var flag = [];
                    $("input[name='ecg_st_segment_elevation_is_lead_V2']:checked").each(function() {
                        flag.push($(this).val());
                    });
                    app.mr.special_examination.ecg.st_segment_change.st_segment_changes[1].change_detail.is_lead_V2 = flag.toString();
                });
                $("input[name='ecg_st_segment_elevation_is_lead_V3']").on('ifChanged', function(event) {
                    var flag = [];
                    $("input[name='ecg_st_segment_elevation_is_lead_V3']:checked").each(function() {
                        flag.push($(this).val());
                    });
                    app.mr.special_examination.ecg.st_segment_change.st_segment_changes[1].change_detail.is_lead_V3 = flag.toString();
                });
                $("input[name='ecg_st_segment_elevation_is_lead_V4']").on('ifChanged', function(event) {
                    var flag = [];
                    $("input[name='ecg_st_segment_elevation_is_lead_V4']:checked").each(function() {
                        flag.push($(this).val());
                    });
                    app.mr.special_examination.ecg.st_segment_change.st_segment_changes[1].change_detail.is_lead_V4 = flag.toString();
                });
                $("input[name='ecg_st_segment_elevation_is_lead_V5']").on('ifChanged', function(event) {
                    var flag = [];
                    $("input[name='ecg_st_segment_elevation_is_lead_V5']:checked").each(function() {
                        flag.push($(this).val());
                    });
                    app.mr.special_examination.ecg.st_segment_change.st_segment_changes[1].change_detail.is_lead_V5 = flag.toString();
                });
                $("input[name='ecg_st_segment_elevation_is_lead_V6']").on('ifChanged', function(event) {
                    var flag = [];
                    $("input[name='ecg_st_segment_elevation_is_lead_V6']:checked").each(function() {
                        flag.push($(this).val());
                    });
                    app.mr.special_examination.ecg.st_segment_change.st_segment_changes[1].change_detail.is_lead_V6 = flag.toString();
                });
                $("input[name='ecg_st_segment_elevation_is_lead_V7']").on('ifChanged', function(event) {
                    var flag = [];
                    $("input[name='ecg_st_segment_elevation_is_lead_V7']:checked").each(function() {
                        flag.push($(this).val());
                    });
                    app.mr.special_examination.ecg.st_segment_change.st_segment_changes[1].change_detail.is_lead_V7 = flag.toString();
                });
                $("input[name='ecg_st_segment_elevation_is_lead_V8']").on('ifChanged', function(event) {
                    var flag = [];
                    $("input[name='ecg_st_segment_elevation_is_lead_V8']:checked").each(function() {
                        flag.push($(this).val());
                    });
                    app.mr.special_examination.ecg.st_segment_change.st_segment_changes[1].change_detail.is_lead_V8 = flag.toString();
                });
                $("input[name='ecg_st_segment_elevation_is_lead_V9']").on('ifChanged', function(event) {
                    var flag = [];
                    $("input[name='ecg_st_segment_elevation_is_lead_V9']:checked").each(function() {
                        flag.push($(this).val());
                    });
                    app.mr.special_examination.ecg.st_segment_change.st_segment_changes[1].change_detail.is_lead_V9 = flag.toString();
                });

                $("input[name='ecg_is_t_wave_change']").on('ifChanged', function(event) {
                    app.mr.special_examination.ecg.t_wave_change.is_t_wave_change = $("input[name='ecg_is_t_wave_change']:checked").val();
                });
                $("input[name='ecg_t_wave_is_lead_I']").on('ifChanged', function(event) {
                    var flag = [];
                    $("input[name='ecg_t_wave_is_lead_I']:checked").each(function() {
                        flag.push($(this).val());
                    });
                    app.mr.special_examination.ecg.t_wave_change.change_detail.is_lead_I = flag.toString();
                });
                $("input[name='ecg_t_wave_is_lead_II']").on('ifChanged', function(event) {
                    var flag = [];
                    $("input[name='ecg_t_wave_is_lead_II']:checked").each(function() {
                        flag.push($(this).val());
                    });
                    app.mr.special_examination.ecg.t_wave_change.change_detail.is_lead_II = flag.toString();
                });
                $("input[name='ecg_t_wave_is_lead_III']").on('ifChanged', function(event) {
                    var flag = [];
                    $("input[name='ecg_t_wave_is_lead_III']:checked").each(function() {
                        flag.push($(this).val());
                    });
                    app.mr.special_examination.ecg.t_wave_change.change_detail.is_lead_III = flag.toString();
                });
                $("input[name='ecg_t_wave_is_lead_aVR']").on('ifChanged', function(event) {
                    var flag = [];
                    $("input[name='ecg_t_wave_is_lead_aVR']:checked").each(function() {
                        flag.push($(this).val());
                    });
                    app.mr.special_examination.ecg.t_wave_change.change_detail.is_lead_aVR = flag.toString();
                });
                $("input[name='ecg_t_wave_is_lead_aVL']").on('ifChanged', function(event) {
                    var flag = [];
                    $("input[name='ecg_t_wave_is_lead_aVL']:checked").each(function() {
                        flag.push($(this).val());
                    });
                    app.mr.special_examination.ecg.t_wave_change.change_detail.is_lead_aVL = flag.toString();
                });
                $("input[name='ecg_t_wave_is_lead_aVF']").on('ifChanged', function(event) {
                    var flag = [];
                    $("input[name='ecg_t_wave_is_lead_aVF']:checked").each(function() {
                        flag.push($(this).val());
                    });
                    app.mr.special_examination.ecg.t_wave_change.change_detail.is_lead_aVF = flag.toString();
                });
                $("input[name='ecg_t_wave_is_lead_V1']").on('ifChanged', function(event) {
                    var flag = [];
                    $("input[name='ecg_t_wave_is_lead_V1']:checked").each(function() {
                        flag.push($(this).val());
                    });
                    app.mr.special_examination.ecg.t_wave_change.change_detail.is_lead_V1 = flag.toString();
                });
                $("input[name='ecg_t_wave_is_lead_V2']").on('ifChanged', function(event) {
                    var flag = [];
                    $("input[name='ecg_t_wave_is_lead_V2']:checked").each(function() {
                        flag.push($(this).val());
                    });
                    app.mr.special_examination.ecg.t_wave_change.change_detail.is_lead_V2 = flag.toString();
                });
                $("input[name='ecg_t_wave_is_lead_V3']").on('ifChanged', function(event) {
                    var flag = [];
                    $("input[name='ecg_t_wave_is_lead_V3']:checked").each(function() {
                        flag.push($(this).val());
                    });
                    app.mr.special_examination.ecg.t_wave_change.change_detail.is_lead_V3 = flag.toString();
                });
                $("input[name='ecg_t_wave_is_lead_V4']").on('ifChanged', function(event) {
                    var flag = [];
                    $("input[name='ecg_t_wave_is_lead_V4']:checked").each(function() {
                        flag.push($(this).val());
                    });
                    app.mr.special_examination.ecg.t_wave_change.change_detail.is_lead_V4 = flag.toString();
                });
                $("input[name='ecg_t_wave_is_lead_V5']").on('ifChanged', function(event) {
                    var flag = [];
                    $("input[name='ecg_t_wave_is_lead_V5']:checked").each(function() {
                        flag.push($(this).val());
                    });
                    app.mr.special_examination.ecg.t_wave_change.change_detail.is_lead_V5 = flag.toString();
                });
                $("input[name='ecg_t_wave_is_lead_V6']").on('ifChanged', function(event) {
                    var flag = [];
                    $("input[name='ecg_t_wave_is_lead_V6']:checked").each(function() {
                        flag.push($(this).val());
                    });
                    app.mr.special_examination.ecg.t_wave_change.change_detail.is_lead_V6 = flag.toString();
                });
                $("input[name='ecg_t_wave_is_lead_V7']").on('ifChanged', function(event) {
                    var flag = [];
                    $("input[name='ecg_t_wave_is_lead_V7']:checked").each(function() {
                        flag.push($(this).val());
                    });
                    app.mr.special_examination.ecg.t_wave_change.change_detail.is_lead_V7 = flag.toString();
                });
                $("input[name='ecg_t_wave_is_lead_V8']").on('ifChanged', function(event) {
                    var flag = [];
                    $("input[name='ecg_t_wave_is_lead_V8']:checked").each(function() {
                        flag.push($(this).val());
                    });
                    app.mr.special_examination.ecg.t_wave_change.change_detail.is_lead_V8 = flag.toString();
                });
                $("input[name='ecg_t_wave_is_lead_V9']").on('ifChanged', function(event) {
                    var flag = [];
                    $("input[name='ecg_t_wave_is_lead_V9']:checked").each(function() {
                        flag.push($(this).val());
                    });
                    app.mr.special_examination.ecg.t_wave_change.change_detail.is_lead_V9 = flag.toString();
                });
                $("input[name='ecg_is_arrhythmia']").on('ifChanged', function(event) {
                    app.mr.special_examination.ecg.arrhythmia.is_arrhythmia = $("input[name='ecg_is_arrhythmia']:checked").val();
                });
                $("input[name='is_ecg_result_normal']").on('ifChanged', function(event) {
                    app.mr.special_examination.ecg.is_result_normal = $("input[name='is_ecg_result_normal']:checked").val();
                });


                $("input[name='is_exercise_angina']").on('ifChanged', function(event) {
                    app.mr.special_examination.exercise_ecg.is_exercise_angina = $("input[name='is_exercise_angina']:checked").val();
                });
                $("input[name='exercise_ecg_is_st_segment_change']").on('ifChanged', function(event) {
                    app.mr.special_examination.exercise_ecg.st_segment_change.is_st_segment_change = $("input[name='exercise_ecg_is_st_segment_change']:checked").val();
                });
                $("input[name='exercise_ecg_is_st_segment_depression']").on('ifChanged', function(event) {
                    app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[0].is_st_segment_depression = $("input[name='exercise_ecg_is_st_segment_depression']:checked").val();
                });
                $("input[name='exercise_ecg_is_st_segment_elevation']").on('ifChanged', function(event) {
                    app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[1].is_st_segment_elevation = $("input[name='exercise_ecg_is_st_segment_elevation']:checked").val();
                });
                $("input[name='exercise_ecg_st_segment_depression_is_lead_I']").on('ifChanged', function(event) {
                    var flag = [];
                    $("input[name='exercise_ecg_st_segment_depression_is_lead_I']:checked").each(function() {
                        flag.push($(this).val());
                    });
                    app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[0].change_detail.is_lead_I = flag.toString();
                });
                $("input[name='exercise_ecg_st_segment_depression_is_lead_II']").on('ifChanged', function(event) {
                    var flag = [];
                    $("input[name='exercise_ecg_st_segment_depression_is_lead_II']:checked").each(function() {
                        flag.push($(this).val());
                    });
                    app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[0].change_detail.is_lead_II = flag.toString();
                });
                $("input[name='exercise_ecg_st_segment_depression_is_lead_III']").on('ifChanged', function(event) {
                    var flag = [];
                    $("input[name='exercise_ecg_st_segment_depression_is_lead_III']:checked").each(function() {
                        flag.push($(this).val());
                    });
                    app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[0].change_detail.is_lead_III = flag.toString();
                });
                $("input[name='exercise_ecg_st_segment_depression_is_lead_aVR']").on('ifChanged', function(event) {
                    var flag = [];
                    $("input[name='exercise_ecg_st_segment_depression_is_lead_aVR']:checked").each(function() {
                        flag.push($(this).val());
                    });
                    app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[0].change_detail.is_lead_aVR = flag.toString();
                });
                $("input[name='exercise_ecg_st_segment_depression_is_lead_aVL']").on('ifChanged', function(event) {
                    var flag = [];
                    $("input[name='exercise_ecg_st_segment_depression_is_lead_aVL']:checked").each(function() {
                        flag.push($(this).val());
                    });
                    app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[0].change_detail.is_lead_aVL = flag.toString();
                });
                $("input[name='exercise_ecg_st_segment_depression_is_lead_aVF']").on('ifChanged', function(event) {
                    var flag = [];
                    $("input[name='exercise_ecg_st_segment_depression_is_lead_aVF']:checked").each(function() {
                        flag.push($(this).val());
                    });
                    app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[0].change_detail.is_lead_aVF = flag.toString();
                });
                $("input[name='exercise_ecg_st_segment_depression_is_lead_V1']").on('ifChanged', function(event) {
                    var flag = [];
                    $("input[name='exercise_ecg_st_segment_depression_is_lead_V1']:checked").each(function() {
                        flag.push($(this).val());
                    });
                    app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[0].change_detail.is_lead_V1 = flag.toString();
                });
                $("input[name='exercise_ecg_st_segment_depression_is_lead_V2']").on('ifChanged', function(event) {
                    var flag = [];
                    $("input[name='exercise_ecg_st_segment_depression_is_lead_V2']:checked").each(function() {
                        flag.push($(this).val());
                    });
                    app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[0].change_detail.is_lead_V2 = flag.toString();
                });
                $("input[name='exercise_ecg_st_segment_depression_is_lead_V3']").on('ifChanged', function(event) {
                    var flag = [];
                    $("input[name='exercise_ecg_st_segment_depression_is_lead_V3']:checked").each(function() {
                        flag.push($(this).val());
                    });
                    app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[0].change_detail.is_lead_V3 = flag.toString();
                });
                $("input[name='exercise_ecg_st_segment_depression_is_lead_V4']").on('ifChanged', function(event) {
                    var flag = [];
                    $("input[name='exercise_ecg_st_segment_depression_is_lead_V4']:checked").each(function() {
                        flag.push($(this).val());
                    });
                    app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[0].change_detail.is_lead_V4 = flag.toString();
                });
                $("input[name='exercise_ecg_st_segment_depression_is_lead_V5']").on('ifChanged', function(event) {
                    var flag = [];
                    $("input[name='exercise_ecg_st_segment_depression_is_lead_V5']:checked").each(function() {
                        flag.push($(this).val());
                    });
                    app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[0].change_detail.is_lead_V5 = flag.toString();
                });
                $("input[name='exercise_ecg_st_segment_depression_is_lead_V6']").on('ifChanged', function(event) {
                    var flag = [];
                    $("input[name='exercise_ecg_st_segment_depression_is_lead_V6']:checked").each(function() {
                        flag.push($(this).val());
                    });
                    app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[0].change_detail.is_lead_V6 = flag.toString();
                });
                $("input[name='exercise_ecg_st_segment_depression_is_lead_V7']").on('ifChanged', function(event) {
                    var flag = [];
                    $("input[name='exercise_ecg_st_segment_depression_is_lead_V7']:checked").each(function() {
                        flag.push($(this).val());
                    });
                    app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[0].change_detail.is_lead_V7 = flag.toString();
                });
                $("input[name='exercise_ecg_st_segment_depression_is_lead_V8']").on('ifChanged', function(event) {
                    var flag = [];
                    $("input[name='exercise_ecg_st_segment_depression_is_lead_V8']:checked").each(function() {
                        flag.push($(this).val());
                    });
                    app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[0].change_detail.is_lead_V8 = flag.toString();
                });
                $("input[name='exercise_ecg_st_segment_depression_is_lead_V9']").on('ifChanged', function(event) {
                    var flag = [];
                    $("input[name='exercise_ecg_st_segment_depression_is_lead_V9']:checked").each(function() {
                        flag.push($(this).val());
                    });
                    app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[0].change_detail.is_lead_V9 = flag.toString();
                });
                $("input[name='exercise_ecg_st_segment_elevation_is_lead_I']").on('ifChanged', function(event) {
                    var flag = [];
                    $("input[name='exercise_ecg_st_segment_elevation_is_lead_I']:checked").each(function() {
                        flag.push($(this).val());
                    });
                    app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[1].change_detail.is_lead_I = flag.toString();
                });
                $("input[name='exercise_ecg_st_segment_elevation_is_lead_II']").on('ifChanged', function(event) {
                    var flag = [];
                    $("input[name='exercise_ecg_st_segment_elevation_is_lead_II']:checked").each(function() {
                        flag.push($(this).val());
                    });
                    app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[1].change_detail.is_lead_II = flag.toString();
                });
                $("input[name='exercise_ecg_st_segment_elevation_is_lead_III']").on('ifChanged', function(event) {
                    var flag = [];
                    $("input[name='exercise_ecg_st_segment_elevation_is_lead_III']:checked").each(function() {
                        flag.push($(this).val());
                    });
                    app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[1].change_detail.is_lead_III = flag.toString();
                });
                $("input[name='exercise_ecg_st_segment_elevation_is_lead_aVR']").on('ifChanged', function(event) {
                    var flag = [];
                    $("input[name='exercise_ecg_st_segment_elevation_is_lead_aVR']:checked").each(function() {
                        flag.push($(this).val());
                    });
                    app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[1].change_detail.is_lead_aVR = flag.toString();
                });
                $("input[name='exercise_ecg_st_segment_elevation_is_lead_aVL']").on('ifChanged', function(event) {
                    var flag = [];
                    $("input[name='exercise_ecg_st_segment_elevation_is_lead_aVL']:checked").each(function() {
                        flag.push($(this).val());
                    });
                    app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[1].change_detail.is_lead_aVL = flag.toString();
                });
                $("input[name='exercise_ecg_st_segment_elevation_is_lead_aVF']").on('ifChanged', function(event) {
                    var flag = [];
                    $("input[name='exercise_ecg_st_segment_elevation_is_lead_aVF']:checked").each(function() {
                        flag.push($(this).val());
                    });
                    app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[1].change_detail.is_lead_aVF = flag.toString();
                });
                $("input[name='exercise_ecg_st_segment_elevation_is_lead_V1']").on('ifChanged', function(event) {
                    var flag = [];
                    $("input[name='exercise_ecg_st_segment_elevation_is_lead_V1']:checked").each(function() {
                        flag.push($(this).val());
                    });
                    app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[1].change_detail.is_lead_V1 = flag.toString();
                });
                $("input[name='exercise_ecg_st_segment_elevation_is_lead_V2']").on('ifChanged', function(event) {
                    var flag = [];
                    $("input[name='exercise_ecg_st_segment_elevation_is_lead_V2']:checked").each(function() {
                        flag.push($(this).val());
                    });
                    app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[1].change_detail.is_lead_V2 = flag.toString();
                });
                $("input[name='exercise_ecg_st_segment_elevation_is_lead_V3']").on('ifChanged', function(event) {
                    var flag = [];
                    $("input[name='exercise_ecg_st_segment_elevation_is_lead_V3']:checked").each(function() {
                        flag.push($(this).val());
                    });
                    app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[1].change_detail.is_lead_V3 = flag.toString();
                });
                $("input[name='exercise_ecg_st_segment_elevation_is_lead_V4']").on('ifChanged', function(event) {
                    var flag = [];
                    $("input[name='exercise_ecg_st_segment_elevation_is_lead_V4']:checked").each(function() {
                        flag.push($(this).val());
                    });
                    app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[1].change_detail.is_lead_V4 = flag.toString();
                });
                $("input[name='exercise_ecg_st_segment_elevation_is_lead_V5']").on('ifChanged', function(event) {
                    var flag = [];
                    $("input[name='exercise_ecg_st_segment_elevation_is_lead_V5']:checked").each(function() {
                        flag.push($(this).val());
                    });
                    app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[1].change_detail.is_lead_V5 = flag.toString();
                });
                $("input[name='exercise_ecg_st_segment_elevation_is_lead_V6']").on('ifChanged', function(event) {
                    var flag = [];
                    $("input[name='exercise_ecg_st_segment_elevation_is_lead_V6']:checked").each(function() {
                        flag.push($(this).val());
                    });
                    app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[1].change_detail.is_lead_V6 = flag.toString();
                });
                $("input[name='exercise_ecg_st_segment_elevation_is_lead_V7']").on('ifChanged', function(event) {
                    var flag = [];
                    $("input[name='exercise_ecg_st_segment_elevation_is_lead_V7']:checked").each(function() {
                        flag.push($(this).val());
                    });
                    app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[1].change_detail.is_lead_V7 = flag.toString();
                });
                $("input[name='exercise_ecg_st_segment_elevation_is_lead_V8']").on('ifChanged', function(event) {
                    var flag = [];
                    $("input[name='exercise_ecg_st_segment_elevation_is_lead_V8']:checked").each(function() {
                        flag.push($(this).val());
                    });
                    app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[1].change_detail.is_lead_V8 = flag.toString();
                });
                $("input[name='exercise_ecg_st_segment_elevation_is_lead_V9']").on('ifChanged', function(event) {
                    var flag = [];
                    $("input[name='exercise_ecg_st_segment_elevation_is_lead_V9']:checked").each(function() {
                        flag.push($(this).val());
                    });
                    app.mr.special_examination.exercise_ecg.st_segment_change.st_segment_changes[1].change_detail.is_lead_V9 = flag.toString();
                });

                $("input[name='exercise_ecg_is_t_wave_change']").on('ifChanged', function(event) {
                    app.mr.special_examination.exercise_ecg.t_wave_change.is_t_wave_change = $("input[name='exercise_ecg_is_t_wave_change']:checked").val();
                });
                $("input[name='exercise_ecg_t_wave_is_lead_I']").on('ifChanged', function(event) {
                    var flag = [];
                    $("input[name='exercise_ecg_t_wave_is_lead_I']:checked").each(function() {
                        flag.push($(this).val());
                    });
                    app.mr.special_examination.exercise_ecg.t_wave_change.change_detail.is_lead_I = flag.toString();
                });
                $("input[name='exercise_ecg_t_wave_is_lead_II']").on('ifChanged', function(event) {
                    var flag = [];
                    $("input[name='exercise_ecg_t_wave_is_lead_II']:checked").each(function() {
                        flag.push($(this).val());
                    });
                    app.mr.special_examination.exercise_ecg.t_wave_change.change_detail.is_lead_II = flag.toString();
                });
                $("input[name='exercise_ecg_t_wave_is_lead_III']").on('ifChanged', function(event) {
                    var flag = [];
                    $("input[name='exercise_ecg_t_wave_is_lead_III']:checked").each(function() {
                        flag.push($(this).val());
                    });
                    app.mr.special_examination.exercise_ecg.t_wave_change.change_detail.is_lead_III = flag.toString();
                });
                $("input[name='exercise_ecg_t_wave_is_lead_aVR']").on('ifChanged', function(event) {
                    var flag = [];
                    $("input[name='exercise_ecg_t_wave_is_lead_aVR']:checked").each(function() {
                        flag.push($(this).val());
                    });
                    app.mr.special_examination.exercise_ecg.t_wave_change.change_detail.is_lead_aVR = flag.toString();
                });
                $("input[name='exercise_ecg_t_wave_is_lead_aVL']").on('ifChanged', function(event) {
                    var flag = [];
                    $("input[name='exercise_ecg_t_wave_is_lead_aVL']:checked").each(function() {
                        flag.push($(this).val());
                    });
                    app.mr.special_examination.exercise_ecg.t_wave_change.change_detail.is_lead_aVL = flag.toString();
                });
                $("input[name='exercise_ecg_t_wave_is_lead_aVF']").on('ifChanged', function(event) {
                    var flag = [];
                    $("input[name='exercise_ecg_t_wave_is_lead_aVF']:checked").each(function() {
                        flag.push($(this).val());
                    });
                    app.mr.special_examination.exercise_ecg.t_wave_change.change_detail.is_lead_aVF = flag.toString();
                });
                $("input[name='exercise_ecg_t_wave_is_lead_V1']").on('ifChanged', function(event) {
                    var flag = [];
                    $("input[name='exercise_ecg_t_wave_is_lead_V1']:checked").each(function() {
                        flag.push($(this).val());
                    });
                    app.mr.special_examination.exercise_ecg.t_wave_change.change_detail.is_lead_V1 = flag.toString();
                });
                $("input[name='exercise_ecg_t_wave_is_lead_V2']").on('ifChanged', function(event) {
                    var flag = [];
                    $("input[name='exercise_ecg_t_wave_is_lead_V2']:checked").each(function() {
                        flag.push($(this).val());
                    });
                    app.mr.special_examination.exercise_ecg.t_wave_change.change_detail.is_lead_V2 = flag.toString();
                });
                $("input[name='exercise_ecg_t_wave_is_lead_V3']").on('ifChanged', function(event) {
                    var flag = [];
                    $("input[name='exercise_ecg_t_wave_is_lead_V3']:checked").each(function() {
                        flag.push($(this).val());
                    });
                    app.mr.special_examination.exercise_ecg.t_wave_change.change_detail.is_lead_V3 = flag.toString();
                });
                $("input[name='exercise_ecg_t_wave_is_lead_V4']").on('ifChanged', function(event) {
                    var flag = [];
                    $("input[name='exercise_ecg_t_wave_is_lead_V4']:checked").each(function() {
                        flag.push($(this).val());
                    });
                    app.mr.special_examination.exercise_ecg.t_wave_change.change_detail.is_lead_V4 = flag.toString();
                });
                $("input[name='exercise_ecg_t_wave_is_lead_V5']").on('ifChanged', function(event) {
                    var flag = [];
                    $("input[name='exercise_ecg_t_wave_is_lead_V5']:checked").each(function() {
                        flag.push($(this).val());
                    });
                    app.mr.special_examination.exercise_ecg.t_wave_change.change_detail.is_lead_V5 = flag.toString();
                });
                $("input[name='exercise_ecg_t_wave_is_lead_V6']").on('ifChanged', function(event) {
                    var flag = [];
                    $("input[name='exercise_ecg_t_wave_is_lead_V6']:checked").each(function() {
                        flag.push($(this).val());
                    });
                    app.mr.special_examination.exercise_ecg.t_wave_change.change_detail.is_lead_V6 = flag.toString();
                });
                $("input[name='exercise_ecg_t_wave_is_lead_V7']").on('ifChanged', function(event) {
                    var flag = [];
                    $("input[name='exercise_ecg_t_wave_is_lead_V7']:checked").each(function() {
                        flag.push($(this).val());
                    });
                    app.mr.special_examination.exercise_ecg.t_wave_change.change_detail.is_lead_V7 = flag.toString();
                });
                $("input[name='exercise_ecg_t_wave_is_lead_V8']").on('ifChanged', function(event) {
                    var flag = [];
                    $("input[name='exercise_ecg_t_wave_is_lead_V8']:checked").each(function() {
                        flag.push($(this).val());
                    });
                    app.mr.special_examination.exercise_ecg.t_wave_change.change_detail.is_lead_V8 = flag.toString();
                });
                $("input[name='exercise_ecg_t_wave_is_lead_V9']").on('ifChanged', function(event) {
                    var flag = [];
                    $("input[name='exercise_ecg_t_wave_is_lead_V9']:checked").each(function() {
                        flag.push($(this).val());
                    });
                    app.mr.special_examination.exercise_ecg.t_wave_change.change_detail.is_lead_V9 = flag.toString();
                });
                $("input[name='exercise_ecg_result']").on('ifChanged', function(event) {
                    app.mr.special_examination.exercise_ecg.result = $("input[name='exercise_ecg_result']:checked").val();
                });

                $("input[name='holter_ecg_is_arrhythmia']").on('ifChanged', function(event) {
                    app.mr.special_examination.holter_ecg.arrhythmia.is_arrhythmia = $("input[name='holter_ecg_is_arrhythmia']:checked").val();
                });
                $("input[name='holter_ecg_is_pathological_q_wave']").on('ifChanged', function(event) {
                    app.mr.special_examination.holter_ecg.pathological_q_wave.is_pathological_q_wave = $("input[name='holter_ecg_is_pathological_q_wave']:checked").val();
                });
                $("input[name='holter_ecg_is_st_segment_change']").on('ifChanged', function(event) {
                    app.mr.special_examination.holter_ecg.st_segment_change.is_st_segment_change = $("input[name='holter_ecg_is_st_segment_change']:checked").val();
                });
                $("input[name='holter_ecg_is_st_segment_depression']").on('ifChanged', function(event) {
                    app.mr.special_examination.holter_ecg.st_segment_change.st_segment_changes[0].is_st_segment_depression = $("input[name='holter_ecg_is_st_segment_depression']:checked").val();
                });
                $("input[name='holter_ecg_is_st_segment_elevation']").on('ifChanged', function(event) {
                    app.mr.special_examination.holter_ecg.st_segment_change.st_segment_changes[1].is_st_segment_elevation = $("input[name='holter_ecg_is_st_segment_elevation']:checked").val();
                });
                $("input[name='holter_ecg_is_t_wave_change']").on('ifChanged', function(event) {
                    app.mr.special_examination.holter_ecg.t_wave_change.is_t_wave_change = $("input[name='holter_ecg_is_t_wave_change']:checked").val();
                });



                $("input[name='ucg_is_LVEF_lt_forty_percent']").on('ifChanged', function(event) {
                    app.mr.special_examination.ucg.is_LVEF_lt_forty_percent = $("input[name='ucg_is_LVEF_lt_forty_percent']:checked").val();
                });
                $("input[name='ucg_is_local_motion_abnormality']").on('ifChanged', function(event) {
                    app.mr.special_examination.ucg.is_local_motion_abnormality = $("input[name='ucg_is_local_motion_abnormality']:checked").val();
                });
                $("input[name='ucg_is_vntricular_aneurysm']").on('ifChanged', function(event) {
                    app.mr.special_examination.ucg.is_vntricular_aneurysm = $("input[name='ucg_is_vntricular_aneurysm']:checked").val();
                });
                $("input[name='ucg_is_left_ventricular_thrombosis']").on('ifChanged', function(event) {
                    app.mr.special_examination.ucg.is_left_ventricular_thrombosis = $("input[name='ucg_is_left_ventricular_thrombosis']:checked").val();
                });
                $("input[name='pci_coronary_distribution_type']").on('ifChanged', function(event) {
                    app.mr.special_examination.pci.coronary_distribution_type = $("input[name='pci_coronary_distribution_type']:checked").val();
                });
                $("input[name='pci_is_coronary_malformations']").on('ifChanged', function(event) {
                    app.mr.special_examination.pci.is_coronary_malformations = $("input[name='pci_is_coronary_malformations']:checked").val();
                });
                $("input[name='pci_is_grade_3_lesions']").on('ifChanged', function(event) {
                    app.mr.special_examination.pci.is_grade_3_lesions = $("input[name='pci_is_grade_3_lesions']:checked").val();
                });
                $("input[name='pci_is_blood_flow_TIMI_grade_0to2']").on('ifChanged', function(event) {
                    app.mr.special_examination.pci.is_blood_flow_TIMI_grade_0to2 = $("input[name='pci_is_blood_flow_TIMI_grade_0to2']:checked").val();
                });
                $("input[name='pci_is_CTO']").on('ifChanged', function(event) {
                    app.mr.special_examination.pci.is_CTO = $("input[name='pci_is_CTO']:checked").val();
                });
                $("input[name='pci_is_collateral_circulation']").on('ifChanged', function(event) {
                    app.mr.special_examination.pci.is_collateral_circulation = $("input[name='pci_is_collateral_circulation']:checked").val();
                });

                //特殊检查部分结束
                //入院诊断部分开始
                $("input[name='admission_diagnosis_is_acute_myocardial_infarction']").on('ifChanged', function(event) {
                    app.mr.admission_diagnosis.is_acute_myocardial_infarction = $("input[name='admission_diagnosis_is_acute_myocardial_infarction']:checked").val();
                });
                $("input[name='admission_diagnosis_is_subacute_myocardial_infarction']").on('ifChanged', function(event) {
                    app.mr.admission_diagnosis.is_subacute_myocardial_infarction = $("input[name='admission_diagnosis_is_subacute_myocardial_infarction']:checked").val();
                });
                $("input[name='admission_diagnosis_is_old_myocardial_infarction']").on('ifChanged', function(event) {
                    app.mr.admission_diagnosis.is_old_myocardial_infarction = $("input[name='admission_diagnosis_is_old_myocardial_infarction']:checked").val();
                });
                $("input[name='admission_diagnosis_is_unstable_angina_pectoris']").on('ifChanged', function(event) {
                    app.mr.admission_diagnosis.is_unstable_angina_pectoris = $("input[name='admission_diagnosis_is_unstable_angina_pectoris']:checked").val();
                });
                $("input[name='admission_diagnosis_is_effort_angina']").on('ifChanged', function(event) {
                    app.mr.admission_diagnosis.is_effort_angina = $("input[name='admission_diagnosis_is_effort_angina']:checked").val();
                });
                $("input[name='admission_diagnosis_is_silent_myocardial_ischemia']").on('ifChanged', function(event) {
                    app.mr.admission_diagnosis.is_silent_myocardial_ischemia = $("input[name='admission_diagnosis_is_silent_myocardial_ischemia']:checked").val();
                });
                $("input[name='admission_diagnosis_is_ischemic_cardiomyopathy']").on('ifChanged', function(event) {
                    app.mr.admission_diagnosis.is_ischemic_cardiomyopathy = $("input[name='admission_diagnosis_is_ischemic_cardiomyopathy']:checked").val();
                });
                $("input[name='admission_diagnosis_is_sudden_coronary_death']").on('ifChanged', function(event) {
                    app.mr.admission_diagnosis.is_sudden_coronary_death = $("input[name='admission_diagnosis_is_sudden_coronary_death']:checked").val();
                });
                $("input[name='admission_diagnosis_is_chest_pain_of_unknown_origin']").on('ifChanged', function(event) {
                    app.mr.admission_diagnosis.is_chest_pain_of_unknown_origin = $("input[name='admission_diagnosis_is_chest_pain_of_unknown_origin']:checked").val();
                });
                $("input[name='admission_diagnosis_is_diagnosis_others']").on('ifChanged', function(event) {
                    app.mr.admission_diagnosis.is_diagnosis_others = $("input[name='admission_diagnosis_is_diagnosis_others']:checked").val();
                });
                //入院诊断部分结束
                //入院诊断部分开始
                $("input[name='discharge_diagnosis_is_acute_myocardial_infarction']").on('ifChanged', function(event) {
                    app.mr.discharge_diagnosis.is_acute_myocardial_infarction = $("input[name='discharge_diagnosis_is_acute_myocardial_infarction']:checked").val();
                });
                $("input[name='discharge_diagnosis_is_subacute_myocardial_infarction']").on('ifChanged', function(event) {
                    app.mr.discharge_diagnosis.is_subacute_myocardial_infarction = $("input[name='discharge_diagnosis_is_subacute_myocardial_infarction']:checked").val();
                });
                $("input[name='discharge_diagnosis_is_old_myocardial_infarction']").on('ifChanged', function(event) {
                    app.mr.discharge_diagnosis.is_old_myocardial_infarction = $("input[name='discharge_diagnosis_is_old_myocardial_infarction']:checked").val();
                });
                $("input[name='discharge_diagnosis_is_unstable_angina_pectoris']").on('ifChanged', function(event) {
                    app.mr.discharge_diagnosis.is_unstable_angina_pectoris = $("input[name='discharge_diagnosis_is_unstable_angina_pectoris']:checked").val();
                });
                $("input[name='discharge_diagnosis_is_effort_angina']").on('ifChanged', function(event) {
                    app.mr.discharge_diagnosis.is_effort_angina = $("input[name='discharge_diagnosis_is_effort_angina']:checked").val();
                });
                $("input[name='discharge_diagnosis_is_silent_myocardial_ischemia']").on('ifChanged', function(event) {
                    app.mr.discharge_diagnosis.is_silent_myocardial_ischemia = $("input[name='discharge_diagnosis_is_silent_myocardial_ischemia']:checked").val();
                });
                $("input[name='discharge_diagnosis_is_ischemic_cardiomyopathy']").on('ifChanged', function(event) {
                    app.mr.discharge_diagnosis.is_ischemic_cardiomyopathy = $("input[name='discharge_diagnosis_is_ischemic_cardiomyopathy']:checked").val();
                });
                $("input[name='discharge_diagnosis_is_sudden_coronary_death']").on('ifChanged', function(event) {
                    app.mr.discharge_diagnosis.is_sudden_coronary_death = $("input[name='discharge_diagnosis_is_sudden_coronary_death']:checked").val();
                });
                $("input[name='discharge_diagnosis_is_chest_pain_of_unknown_origin']").on('ifChanged', function(event) {
                    app.mr.discharge_diagnosis.is_chest_pain_of_unknown_origin = $("input[name='discharge_diagnosis_is_chest_pain_of_unknown_origin']:checked").val();
                });
                $("input[name='discharge_diagnosis_is_diagnosis_others']").on('ifChanged', function(event) {
                    app.mr.discharge_diagnosis.is_diagnosis_others = $("input[name='discharge_diagnosis_is_diagnosis_others']:checked").val();
                });
                //入院诊断部分结束
            }
        };
    }();
    var FormSelect2 = function() {
        return {

            repeater_init: function() {
                $("select[name*='body_part_name']").select2({
                    placeholder: "选择",
                    data: pageData.history_of_present_illness.disease_body_part_name_list,
                    allowClear: true,
                    minimumResultsForSearch: 20,
                    width: 'auto',
                    language: "zh-CN",
                });
                $("select[name*='body_part_name']").on('change', function(event) {
                    if ($(this).val() == '10') {
                        $(this).parent().next('.mt-repeater-input').removeClass('hide');
                    } else {
                        $(this).parent().next('.mt-repeater-input').find('input').val("");
                        $(this).parent().next('.mt-repeater-input').addClass('hide');
                    }
                });
                $("select[name*='quality_of_pain']").select2({
                    placeholder: "选择",
                    data: pageData.history_of_present_illness.disease_quality_of_pain_list,
                    allowClear: true,
                    minimumResultsForSearch: 20,
                    width: 'auto',
                    language: "zh-CN",
                });
                $("select[name*='quality_of_pain']").on('change', function(event) {
                    if ($(this).val() == '13') {
                        $(this).parent().next('.mt-repeater-input').removeClass('hide');
                    } else {
                        $(this).parent().next('.mt-repeater-input').find('input').val("");
                        $(this).parent().next('.mt-repeater-input').addClass('hide');
                    }
                });
                $("select[name*='duration_of_pain']").select2({
                    placeholder: "选择",
                    data: pageData.history_of_present_illness.disease_duration_of_pain_list,
                    allowClear: true,
                    minimumResultsForSearch: 20,
                    width: 'auto',
                    language: "zh-CN",
                });
                $("select[name*='duration_of_pain']").on('change', function(event) {
                    if ($(this).val() == '6') {
                        $(this).parent().next('.mt-repeater-input').removeClass('hide');
                    } else {
                        $(this).parent().next('.mt-repeater-input').find('input').val("");
                        $(this).parent().next('.mt-repeater-input').addClass('hide');
                    }
                });
                $("select[name*='pain_degree']").select2({
                    placeholder: "选择",
                    data: pageData.history_of_present_illness.disease_pain_degree_list,
                    allowClear: true,
                    minimumResultsForSearch: 20,
                    width: 'auto',
                    language: "zh-CN",
                });

                $("#old_ischemic_stroke_repeater select[name*='type_name']").select2({
                    placeholder: "选择",
                    data: pageData.anamnesis.old_ischemic_stroke_type_name_list,
                    allowClear: true,
                    minimumResultsForSearch: 20,
                    width: 'auto',
                    language: "zh-CN",
                });

                $("#hemorrhage_repeater select[name*='type_name']").select2({
                    placeholder: "选择",
                    data: pageData.anamnesis.hemorrhage_type_name_list,
                    allowClear: true,
                    minimumResultsForSearch: 20,
                    width: 'auto',
                    language: "zh-CN",
                });
                $("#bleeding_repeater select[name*='cause']").select2({
                    placeholder: "选择",
                    data: pageData.anamnesis.bleeding_cause_list,
                    allowClear: true,
                    minimumResultsForSearch: 20,
                    width: 'auto',
                    language: "zh-CN",
                });

                $("select[name*='onset_member']").select2({
                    placeholder: "选择",
                    data: pageData.family_history.onset_member_list,
                    allowClear: true,
                    minimumResultsForSearch: 20,
                    width: 'auto',
                    language: "zh-CN",
                });
                $("select[name*='gender']").select2({
                    placeholder: "选择",
                    data: pageData.family_history.gender_list,
                    allowClear: true,
                    minimumResultsForSearch: 20,
                    width: 'auto',
                    language: "zh-CN",
                });
                $("select[name*='onset_type']").select2({
                    placeholder: "选择",
                    data: pageData.family_history.premature_chd_type_list,
                    allowClear: true,
                    minimumResultsForSearch: 20,
                    width: 'auto',
                    language: "zh-CN",
                });
                $("select[name*='etiology']").select2({
                    placeholder: "选择",
                    data: pageData.family_history.sudden_death_etiologie_list,
                    allowClear: true,
                    minimumResultsForSearch: 20,
                    width: 'auto',
                    language: "zh-CN",
                });
                $("select[name*='etiology']").on('change', function(event) {
                    if ($(this).val() == '4') {
                        $(this).parent().next('.col-md-2').removeClass('hide');
                    } else {
                        $(this).parent().next('.col-md-2').find('input').val("");
                        $(this).parent().next('.col-md-2').addClass('hide');
                    }
                });

                $("#holter_ecg_arrhythmia_repeater select[name*='arrhythmia_type']").select2({
                    placeholder: "选择",
                    data: pageData.special_examination.arrhythmia_type_list,
                    allowClear: true,
                    minimumResultsForSearch: 20,
                    width: 'auto',
                    language: "zh-CN",
                });
                $("#holter_ecg_arrhythmia_repeater select[name*='arrhythmia_type']").on('change', function(event) {
                    if ($(this).val() == '11') {
                        $(this).parent().next('.col-md-2').removeClass('hide');
                    } else {
                        $(this).parent().next('.col-md-2').find('input').val("");
                        $(this).parent().next('.col-md-2').addClass('hide');
                    }
                });

                $("select[name*='q_wave_leads']").select2({
                    placeholder: "选择",
                    data: pageData.special_examination.lead_list,
                    allowClear: true,
                    minimumResultsForSearch: 20,
                    multiple: true,
                    width: 'auto',
                    language: "zh-CN",
                });

                $("select[name*='waveforms']").select2({
                    placeholder: "选择",
                    data: pageData.special_examination.ecg_waveform_list,
                    allowClear: true,
                    minimumResultsForSearch: 20,
                    language: "zh-CN",
                });

                $("#segmental_lesions_repeater select[name*='num']").select2({
                    placeholder: "选择",
                    data: pageData.special_examination.segmental_lesions_num_list,
                    allowClear: true,
                    minimumResultsForSearch: 20,
                    width: 'auto',
                    language: "zh-CN",
                });
                $("#segmental_lesions_repeater select[name*='shape']").select2({
                    placeholder: "选择",
                    data: pageData.special_examination.segmental_lesions_shape_list,
                    allowClear: true,
                    minimumResultsForSearch: 20,
                    width: 'auto',
                    language: "zh-CN",
                });
                $("select[name*='is_calcification']").select2({
                    placeholder: "选择",
                    data: pageData.special_examination.is_calcification_list,
                    allowClear: true,
                    minimumResultsForSearch: 20,
                    width: 'auto',
                    language: "zh-CN",
                });
                $("select[name*='is_ostial_lesion']").select2({
                    placeholder: "选择",
                    data: pageData.special_examination.is_ostial_lesion_list,
                    allowClear: true,
                    minimumResultsForSearch: 20,
                    width: 'auto',
                    language: "zh-CN",
                });
                $("select[name*='is_thrombus']").select2({
                    placeholder: "选择",
                    data: pageData.special_examination.is_thrombus_list,
                    allowClear: true,
                    minimumResultsForSearch: 20,
                    width: 'auto',
                    language: "zh-CN",
                });
                $("select[name*='TIMI_grade']").select2({
                    placeholder: "选择",
                    data: pageData.special_examination.TIMI_grade_list,
                    allowClear: true,
                    minimumResultsForSearch: 20,
                    width: 'auto',
                    language: "zh-CN",
                });
                $("select[name*='kinds_of_lesions']").select2({
                    placeholder: "选择",
                    data: pageData.special_examination.kinds_of_lesions_list,
                    allowClear: true,
                    minimumResultsForSearch: 20,
                    width: 'auto',
                    language: "zh-CN",
                });
            },
            init: function() {

                //病历基本信息部分开始              
                $("#patient_type_list").select2({
                    placeholder: "选择患者类型",
                    data: pageData.basic_info.patient_type_list,
                    allowClear: true,
                    minimumResultsForSearch: 20,
                    width: 'auto',
                    language: "zh-CN",
                });
                $('#patient_type_list').on('change', function(event) {
                    app.mr.basic_info.is_hospitalized = $(this).val();
                });
                $("#doctor_list").select2({
                    placeholder: "选择主治医生",
                    data: pageData.basic_info.doctor_list,
                    allowClear: true,
                    minimumResultsForSearch: 20,
                    width: 'auto',
                    language: "zh-CN",
                });
                $('#doctor_list').on('change', function(event) {
                    app.mr.basic_info.doctor_id = $(this).val();
                });
                $("#recorder_list").select2({
                    placeholder: "选择记录者",
                    data: pageData.basic_info.recorder_list,
                    allowClear: true,
                    minimumResultsForSearch: 20,
                    width: 'auto',
                    language: "zh-CN",
                });
                $('#recorder_list').on('change', function(event) {
                    app.mr.basic_info.recorder_id = $(this).val();
                });
                $("#nationality_list").select2({
                    placeholder: "选择民族",
                    data: pageData.basic_info.nationality_list,
                    allowClear: true,
                    minimumResultsForSearch: 20,
                    width: 'auto',
                    language: "zh-CN",
                });
                $('#nationality_list').on('change', function(event) {
                    app.mr.basic_info.patient.nationality = $(this).val();
                });
                $("#profession_list").select2({
                    placeholder: "选择职业",
                    data: pageData.basic_info.profession_list,
                    allowClear: true,
                    minimumResultsForSearch: 20,
                    width: 'auto',
                    language: "zh-CN",
                });
                $('#profession_list').on('change', function(event) {
                    app.mr.basic_info.patient.profession = $(this).val();
                });
                $('#birth_province').select2({
                    placeholder: "选择省",
                    language: "zh-CN",
                });
                $('#birth_province').on('change', function(event) {
                    app.mr.basic_info.patient.birth_province = $(this).val();
                    app.mr.basic_info.patient.birth_city = "";
                });
                $('#birth_city').select2({
                    placeholder: "选择市",
                    disabled: true,
                    language: "zh-CN",
                });
                $('#birth_city').on('change', function(event) {
                    app.mr.basic_info.patient.birth_city = $(this).val();
                });
                $('#address_province').select2({
                    placeholder: "选择省",
                    language: "zh-CN",
                });
                $('#address_province').on('change', function(event) {
                    app.mr.basic_info.patient.address_province = $(this).val();
                    app.mr.basic_info.patient.address_city = "";
                    app.mr.basic_info.patient.address_area = "";
                    app.mr.basic_info.patient.address_town = "";
                });
                $('#address_city').select2({
                    placeholder: "选择市",
                    disabled: true,
                    language: "zh-CN",
                });
                $('#address_city').on('change', function(event) {
                    app.mr.basic_info.patient.address_city = $(this).val();
                    app.mr.basic_info.patient.address_area = "";
                    app.mr.basic_info.patient.address_town = "";
                });
                $('#address_area').select2({
                    placeholder: "选择区/县",
                    disabled: true,
                    language: "zh-CN",
                });
                $('#address_area').on('change', function(event) {
                    app.mr.basic_info.patient.address_area = $(this).val();
                    app.mr.basic_info.patient.address_town = "";
                });
                $('#address_town').select2({
                    placeholder: "选择镇/街道",
                    disabled: true,
                    language: "zh-CN",
                });
                $('#address_town').on('change', function(event) {
                    app.mr.basic_info.patient.address_town = $(this).val();
                });
                $('#birth_province').on('select2:select', function(event) {
                    //如果为直辖市，禁用市选择下拉框
                    var cityNum = $('#birth_city').find('option').length;
                    if (cityNum <= 0) {
                        $("#birth_city").prop("disabled", true);
                    } else {
                        $("#birth_city").prop("disabled", false);
                    }
                });
                $('#address_province').on('select2:select', function(event) {
                    //如果为直辖市，禁用市选择下拉框
                    var cityNum = $('#address_city').find('option').length;
                    var areaNum = $('#address_area').find('option').length;
                    if (cityNum <= 0) {
                        $("#address_city").prop("disabled", true);
                        if (areaNum <= 0) {
                            $("#address_area").prop("disabled", true);
                        } else {
                            $("#address_area").prop("disabled", false);
                        }
                    } else {
                        $("#address_city").prop("disabled", false);
                    }
                });
                $('#address_city').on('select2:select', function(event) {
                    var areaNum = $('#address_area').find('option').length;
                    if (areaNum <= 0) {
                        $("#address_area").prop("disabled", true);
                    } else {
                        $("#address_area").prop("disabled", false);
                    }
                });
                //病历基本信息部分结束

                //现病史部分开始
                $("select[name*='onset_time']").select2({
                    placeholder: "选择",
                    data: pageData.history_of_present_illness.onset_time_list,
                    allowClear: true,
                    minimumResultsForSearch: 20,
                    multiple: true,
                    width: 'auto',
                    language: "zh-CN",
                });
                $('#chest_pain_onset_time').on('change', function(event) {
                    if ($(this).val()) {
                        app.care_causes_diseases.chest_pain.onset_time = $(this).val().toString();
                    } else {
                        app.care_causes_diseases.chest_pain.onset_time = "";
                    }
                });
                $('#chest_distress_onset_time').on('change', function(event) {
                    if ($(this).val()) {
                        app.care_causes_diseases.chest_distress.onset_time = $(this).val().toString();
                    } else {
                        app.care_causes_diseases.chest_distress.onset_time = "";
                    }
                });
                $('#dyspnea_onset_time').on('change', function(event) {
                    if ($(this).val()) {
                        app.care_causes_diseases.dyspnea.onset_time = $(this).val().toString();
                    } else {
                        app.care_causes_diseases.dyspnea.onset_time = "";
                    }
                });
                $('#palpitation_onset_time').on('change', function(event) {
                    if ($(this).val()) {
                        app.care_causes_diseases.palpitation.onset_time = $(this).val().toString();
                    } else {
                        app.care_causes_diseases.palpitation.onset_time = "";
                    }
                });
                $('#abnormal_ecg_onset_time').on('change', function(event) {
                    if ($(this).val()) {
                        app.care_causes_diseases.abnormal_ecg.onset_time = $(this).val().toString();
                    } else {
                        app.care_causes_diseases.abnormal_ecg.onset_time = "";
                    }
                });
                $("select[name*='body_part_name']").select2({
                    placeholder: "选择",
                    data: pageData.history_of_present_illness.disease_body_part_name_list,
                    allowClear: true,
                    minimumResultsForSearch: 20,
                    width: 'auto',
                    language: "zh-CN",
                });
                $("select[name*='body_part_name']").on('change', function(event) {
                    if ($(this).val() == '10') {
                        $(this).parent().next('.mt-repeater-input').removeClass('hide');
                    } else {
                        $(this).parent().next('.mt-repeater-input').find('input').val("");
                        $(this).parent().next('.mt-repeater-input').addClass('hide');
                    }
                });
                $("select[name*='quality_of_pain']").select2({
                    placeholder: "选择",
                    data: pageData.history_of_present_illness.disease_quality_of_pain_list,
                    allowClear: true,
                    minimumResultsForSearch: 20,
                    width: 'auto',
                    language: "zh-CN",
                });
                $("select[name*='quality_of_pain']").on('change', function(event) {
                    if ($(this).val() == '13') {
                        $(this).parent().next('.mt-repeater-input').removeClass('hide');
                    } else {
                        $(this).parent().next('.mt-repeater-input').find('input').val("");
                        $(this).parent().next('.mt-repeater-input').addClass('hide');
                    }
                });
                $("select[name*='duration_of_pain']").select2({
                    placeholder: "选择",
                    data: pageData.history_of_present_illness.disease_duration_of_pain_list,
                    allowClear: true,
                    minimumResultsForSearch: 20,
                    width: 'auto',
                    language: "zh-CN",
                });
                $("select[name*='duration_of_pain']").on('change', function(event) {
                    if ($(this).val() == '6') {
                        $(this).parent().next('.mt-repeater-input').removeClass('hide');
                    } else {
                        $(this).parent().next('.mt-repeater-input').find('input').val("");
                        $(this).parent().next('.mt-repeater-input').addClass('hide');
                    }
                });
                $("select[name*='pain_degree']").select2({
                    placeholder: "选择",
                    data: pageData.history_of_present_illness.disease_pain_degree_list,
                    allowClear: true,
                    minimumResultsForSearch: 20,
                    width: 'auto',
                    language: "zh-CN",
                });
                $("select[name*='relieving_factors']").select2({
                    placeholder: "选择",
                    data: pageData.history_of_present_illness.relieving_factors_list,
                    allowClear: true,
                    minimumResultsForSearch: 20,
                    width: 'auto',
                    language: "zh-CN",
                });
                $('#chest_pain_relieving_factors').on('change', function(event) {
                    app.care_causes_diseases.chest_pain.relieving_factors = $(this).val();
                });
                $('#chest_distress_relieving_factors').on('change', function(event) {
                    app.care_causes_diseases.chest_distress.relieving_factors = $(this).val();
                });
                $("select[name*='precipitating_factors']").select2({
                    placeholder: "选择",
                    data: pageData.history_of_present_illness.precipitating_factors_list,
                    allowClear: true,
                    minimumResultsForSearch: 20,
                    multiple: true,
                    width: 'auto',
                    language: "zh-CN",
                });
                $('#chest_pain_precipitating_factors').on('change', function(event) {
                    if ($(this).val()) {
                        app.care_causes_diseases.chest_pain.precipitating_factors = $(this).val().toString();
                    } else {
                        app.care_causes_diseases.chest_pain.precipitating_factors = "";
                    }
                });
                $('#chest_distress_precipitating_factors').on('change', function(event) {
                    if ($(this).val()) {
                        app.care_causes_diseases.chest_distress.precipitating_factors = $(this).val().toString();
                    } else {
                        app.care_causes_diseases.chest_distress.precipitating_factors = "";
                    }
                });
                $("select[name*='radiation_sites']").select2({
                    placeholder: "选择",
                    data: pageData.history_of_present_illness.radiation_sites_list,
                    allowClear: true,
                    minimumResultsForSearch: 20,
                    multiple: true,
                    width: 'auto',
                    language: "zh-CN",
                });
                $('#chest_pain_radiation_sites').on('change', function(event) {
                    if ($(this).val()) {
                        app.care_causes_diseases.chest_pain.radiation_sites = $(this).val().toString();
                    } else {
                        app.care_causes_diseases.chest_pain.radiation_sites = "";
                    }
                });
                $('#chest_distress_radiation_sites').on('change', function(event) {
                    if ($(this).val()) {
                        app.care_causes_diseases.chest_distress.radiation_sites = $(this).val().toString();
                    } else {
                        app.care_causes_diseases.chest_distress.radiation_sites = "";
                    }
                });
                $("select[name*='simultaneous_phenomena']").select2({
                    placeholder: "选择",
                    data: pageData.history_of_present_illness.simultaneous_phenomena_list,
                    allowClear: true,
                    minimumResultsForSearch: 20,
                    multiple: true,
                    width: 'auto',
                    language: "zh-CN",
                });
                $('#chest_pain_simultaneous_phenomena').on('change', function(event) {
                    if ($(this).val()) {
                        app.care_causes_diseases.chest_pain.simultaneous_phenomena = $(this).val().toString();
                    } else {
                        app.care_causes_diseases.chest_pain.simultaneous_phenomena = "";
                    }
                });
                $('#chest_distress_simultaneous_phenomena').on('change', function(event) {
                    if ($(this).val()) {
                        app.care_causes_diseases.chest_distress.simultaneous_phenomena = $(this).val().toString();
                    } else {
                        app.care_causes_diseases.chest_distress.simultaneous_phenomena = "";
                    }
                });
                $("select[name*='angina_pectoris_ccs']").select2({
                    placeholder: "选择",
                    data: pageData.history_of_present_illness.angina_pectoris_ccs_list,
                    allowClear: true,
                    minimumResultsForSearch: 20,
                    width: 'auto',
                    language: "zh-CN",
                });
                $("select[name*='angina_pectoris_ccs']").on('change', function(event) {
                    app.mr.history_of_present_illness.angina_pectoris_ccs = $(this).val();
                });
                //现病史部分结束

                //危险因素部分开始
                $("select[name*='cigrette_type']").select2({
                    placeholder: "选择",
                    data: pageData.risk_factors.cigrette_type_list,
                    allowClear: true,
                    minimumResultsForSearch: 20,
                    multiple: true,
                    width: 'auto',
                    language: "zh-CN",
                });
                $('#risk_factors_cigrette_type').on('change', function(event) {
                    if ($(this).val()) {
                        app.mr.risk_factors.smoking.cigrette_type = $(this).val().toString();
                    } else {
                        app.mr.risk_factors.smoking.cigrette_type = "";
                    }
                });
                $("select[name*='wine_type']").select2({
                    placeholder: "选择",
                    data: pageData.risk_factors.wine_type_list,
                    allowClear: true,
                    minimumResultsForSearch: 20,
                    multiple: true,
                    width: 'auto',
                    language: "zh-CN",
                });
                $('#risk_factors_wine_type').on('change', function(event) {
                    if ($(this).val()) {
                        app.mr.risk_factors.drinking.wine_type = $(this).val().toString();
                    } else {
                        app.mr.risk_factors.drinking.wine_type = "";
                    }
                });
                $("select[name*='drinking_amount']").select2({
                    placeholder: "选择",
                    data: pageData.risk_factors.drinking_amount_list,
                    allowClear: true,
                    minimumResultsForSearch: 20,
                    width: 'auto',
                    language: "zh-CN",
                });
                $("#risk_factors_drinking_amount").on('change', function(event) {
                    app.mr.risk_factors.diet_habits.drinking_amount = $(this).val();
                });
                $("select[name*='paddy_potato']").select2({
                    placeholder: "选择",
                    data: pageData.risk_factors.paddy_potato_list,
                    allowClear: true,
                    minimumResultsForSearch: 20,
                    width: 'auto',
                    language: "zh-CN",
                });
                $("#risk_factors_paddy_potato").on('change', function(event) {
                    app.mr.risk_factors.diet_habits.paddy_potato = $(this).val();
                });
                $("select[name*='grain_mixed_beans']").select2({
                    placeholder: "选择",
                    data: pageData.risk_factors.grain_mixed_beans_list,
                    allowClear: true,
                    minimumResultsForSearch: 20,
                    width: 'auto',
                    language: "zh-CN",
                });
                $("#risk_factors_grain_mixed_beans").on('change', function(event) {
                    app.mr.risk_factors.diet_habits.grain_mixed_beans = $(this).val();
                });
                $("select[name*='potato']").select2({
                    placeholder: "选择",
                    data: pageData.risk_factors.potato_list,
                    allowClear: true,
                    minimumResultsForSearch: 20,
                    width: 'auto',
                    language: "zh-CN",
                });
                $("#risk_factors_potato").on('change', function(event) {
                    app.mr.risk_factors.diet_habits.potato = $(this).val();
                });
                $("select[name*='vegetables']").select2({
                    placeholder: "选择",
                    data: pageData.risk_factors.vegetables_list,
                    allowClear: true,
                    minimumResultsForSearch: 20,
                    width: 'auto',
                    language: "zh-CN",
                });
                $("#risk_factors_vegetables").on('change', function(event) {
                    app.mr.risk_factors.diet_habits.vegetables = $(this).val();
                });
                $("select[name*='fruits']").select2({
                    placeholder: "选择",
                    data: pageData.risk_factors.fruits_list,
                    allowClear: true,
                    minimumResultsForSearch: 20,
                    width: 'auto',
                    language: "zh-CN",
                });
                $("#risk_factors_fruits").on('change', function(event) {
                    app.mr.risk_factors.diet_habits.fruits = $(this).val();
                });
                $("select[name*='livestock_meat']").select2({
                    placeholder: "选择",
                    data: pageData.risk_factors.livestock_meat_list,
                    allowClear: true,
                    minimumResultsForSearch: 20,
                    width: 'auto',
                    language: "zh-CN",
                });
                $("#risk_factors_livestock_meat").on('change', function(event) {
                    app.mr.risk_factors.diet_habits.livestock_meat = $(this).val();
                });
                $("select[name*='aquatic_products']").select2({
                    placeholder: "选择",
                    data: pageData.risk_factors.aquatic_products_list,
                    allowClear: true,
                    minimumResultsForSearch: 20,
                    width: 'auto',
                    language: "zh-CN",
                });
                $("#risk_factors_aquatic_products").on('change', function(event) {
                    app.mr.risk_factors.diet_habits.aquatic_products = $(this).val();
                });
                $("select[name*='eggs']").select2({
                    placeholder: "选择",
                    data: pageData.risk_factors.eggs_list,
                    allowClear: true,
                    minimumResultsForSearch: 20,
                    width: 'auto',
                    language: "zh-CN",
                });
                $("#risk_factors_eggs").on('change', function(event) {
                    app.mr.risk_factors.diet_habits.eggs = $(this).val();
                });
                $("select[name*='milk_products']").select2({
                    placeholder: "选择",
                    data: pageData.risk_factors.milk_products_list,
                    allowClear: true,
                    minimumResultsForSearch: 20,
                    width: 'auto',
                    language: "zh-CN",
                });
                $("#risk_factors_milk_products").on('change', function(event) {
                    app.mr.risk_factors.diet_habits.milk_products = $(this).val();
                });
                $("select[name*='soybeans_nuts']").select2({
                    placeholder: "选择",
                    data: pageData.risk_factors.soybeans_nuts_list,
                    allowClear: true,
                    minimumResultsForSearch: 20,
                    width: 'auto',
                    language: "zh-CN",
                });
                $("#risk_factors_soybeans_nuts").on('change', function(event) {
                    app.mr.risk_factors.diet_habits.soybeans_nuts = $(this).val();
                });
                $("select[name*='salt']").select2({
                    placeholder: "选择",
                    data: pageData.risk_factors.salt_list,
                    allowClear: true,
                    minimumResultsForSearch: 20,
                    width: 'auto',
                    language: "zh-CN",
                });
                $("#risk_factors_salt").on('change', function(event) {
                    app.mr.risk_factors.diet_habits.salt = $(this).val();
                });
                $("select[name*='sugar']").select2({
                    placeholder: "选择",
                    data: pageData.risk_factors.sugar_list,
                    allowClear: true,
                    minimumResultsForSearch: 20,
                    width: 'auto',
                    language: "zh-CN",
                });
                $("#risk_factors_sugar").on('change', function(event) {
                    app.mr.risk_factors.diet_habits.sugar = $(this).val();
                });
                $("select[name*='oil']").select2({
                    placeholder: "选择",
                    data: pageData.risk_factors.oil_list,
                    allowClear: true,
                    minimumResultsForSearch: 20,
                    width: 'auto',
                    language: "zh-CN",
                });
                $("#risk_factors_oil").on('change', function(event) {
                    app.mr.risk_factors.diet_habits.oil = $(this).val();
                });
                $("select[name*='blood_type']").select2({
                    placeholder: "选择",
                    data: pageData.risk_factors.blood_type_list,
                    allowClear: true,
                    minimumResultsForSearch: 20,
                    width: 'auto',
                    language: "zh-CN",
                });
                $("#psychosocial_factors_blood_type").on('change', function(event) {
                    app.mr.risk_factors.psychosocial_factors.blood_type = $(this).val();
                });
                $("select[name*='exercise_type']").select2({
                    placeholder: "选择",
                    data: pageData.risk_factors.exercise_type_list,
                    allowClear: true,
                    minimumResultsForSearch: 20,
                    width: 'auto',
                    language: "zh-CN",
                });
                $("#exercise_type").on('change', function(event) {
                    app.mr.risk_factors.exercise.type = $(this).val();
                });
                $("select[name*='exercise_duration']").select2({
                    placeholder: "选择",
                    data: pageData.risk_factors.exercise_duration_list,
                    allowClear: true,
                    minimumResultsForSearch: 20,
                    width: 'auto',
                    language: "zh-CN",
                });
                $("#exercise_duration").on('change', function(event) {
                    app.mr.risk_factors.exercise.duration = $(this).val();
                });
                $("select[name*='exercise_mode']").select2({
                    placeholder: "选择",
                    data: pageData.risk_factors.exercise_mode_list,
                    allowClear: true,
                    minimumResultsForSearch: 20,
                    multiple: true,
                    width: 'auto',
                    language: "zh-CN",
                });
                $("#exercise_mode").on('change', function(event) {
                    if ($(this).val()) {
                        app.mr.risk_factors.exercise.mode = $(this).val().toString();
                    } else {
                        app.mr.risk_factors.exercise.mode = "";
                    }
                });
                //危险因素部分结束

                //既往病史部分开始
                $("select[name*='lipid_abnormality_type']").select2({
                    placeholder: "选择",
                    data: pageData.anamnesis.lipid_abnormality_type_list,
                    allowClear: true,
                    minimumResultsForSearch: 20,
                    width: 'auto',
                    language: "zh-CN",
                });
                $("#anamnesis_lipid_abnormality_type").on('change', function(event) {
                    if ($(this).val()) {
                        app.mr.anamnesis.lipid_abnormality.type = $(this).val().toString();
                    } else {
                        app.mr.anamnesis.lipid_abnormality.type = "";
                    }
                });
                $("select[name*='dysglycemia_type']").select2({
                    placeholder: "选择",
                    data: pageData.anamnesis.dysglycemia_type_list,
                    allowClear: true,
                    minimumResultsForSearch: 20,
                    width: 'auto',
                    language: "zh-CN",
                });
                $("#anamnesis_dysglycemia_type").on('change', function(event) {
                    if ($(this).val()) {
                        app.mr.anamnesis.dysglycemia.type = $(this).val().toString();
                    } else {
                        app.mr.anamnesis.dysglycemia.type = "";
                    }
                });
                $("select[name*='diabetes_mellitus_treatment_method']").select2({
                    placeholder: "选择",
                    data: pageData.anamnesis.diabetes_mellitus_treatment_method_list,
                    allowClear: true,
                    minimumResultsForSearch: 20,
                    multiple: true,
                    width: 'auto',
                    language: "zh-CN",
                });
                $("#anamnesis_diabetes_mellitus_treatment_method").on('change', function(event) {
                    if ($(this).val()) {
                        app.mr.anamnesis.dysglycemia.diabetes_mellitus.treatment_method = $(this).val().toString();
                    } else {
                        app.mr.anamnesis.dysglycemia.diabetes_mellitus.treatment_method = "";
                    }
                });
                $("select[name*='old_myocardial_infarction_location']").select2({
                    placeholder: "选择",
                    data: pageData.anamnesis.old_myocardial_infarction_location_list,
                    allowClear: true,
                    minimumResultsForSearch: 20,
                    multiple: true,
                    width: 'auto',
                    language: "zh-CN",
                });
                $("#anamnesis_old_myocardial_infarction_location").on('change', function(event) {
                    if ($(this).val()) {
                        app.mr.anamnesis.heart_diseases.old_myocardial_infarction.location = $(this).val().toString();
                    } else {
                        app.mr.anamnesis.heart_diseases.old_myocardial_infarction.location = "";
                    }
                });
                $("select[name*='other_heart_disease_type']").select2({
                    placeholder: "选择",
                    data: pageData.anamnesis.other_heart_disease_type_list,
                    allowClear: true,
                    minimumResultsForSearch: 20,
                    multiple: true,
                    width: 'auto',
                    language: "zh-CN",
                });
                $("#anamnesis_other_heart_disease_type").on('change', function(event) {
                    if ($(this).val()) {
                        app.mr.anamnesis.heart_diseases.other_heart_disease.type = $(this).val().toString();
                    } else {
                        app.mr.anamnesis.heart_diseases.other_heart_disease.type = "";
                    }
                });
                $("select[name*='deep_venou_thrombosis_inducement']").select2({
                    placeholder: "选择",
                    data: pageData.anamnesis.deep_venou_thrombosis_inducement_list,
                    allowClear: true,
                    minimumResultsForSearch: 20,
                    multiple: true,
                    width: 'auto',
                    language: "zh-CN",
                });
                $("#anamnesis_deep_venou_thrombosis_inducements").on('change', function(event) {
                    if ($(this).val()) {
                        app.mr.anamnesis.deep_venou_thrombosis.inducements = $(this).val().toString();
                    } else {
                        app.mr.anamnesis.deep_venou_thrombosis.inducements = "";
                    }
                });
                $("select[name*='deep_venou_thrombosis_symptom']").select2({
                    placeholder: "选择",
                    data: pageData.anamnesis.deep_venou_thrombosis_symptom_list,
                    allowClear: true,
                    minimumResultsForSearch: 20,
                    multiple: true,
                    width: 'auto',
                    language: "zh-CN",
                });
                $("#anamnesis_deep_venou_thrombosis_symptoms").on('change', function(event) {
                    if ($(this).val()) {
                        app.mr.anamnesis.deep_venou_thrombosis.symptoms = $(this).val().toString();
                    } else {
                        app.mr.anamnesis.deep_venou_thrombosis.symptoms = "";
                    }
                });
                $("#old_ischemic_stroke_repeater select[name*='type_name']").select2({
                    placeholder: "选择",
                    data: pageData.anamnesis.old_ischemic_stroke_type_name_list,
                    allowClear: true,
                    minimumResultsForSearch: 20,
                    width: 'auto',
                    language: "zh-CN",
                });
                $("select[name*='vascula_diseases_types']").select2({
                    placeholder: "选择",
                    data: pageData.anamnesis.vascula_diseases_type_list,
                    allowClear: true,
                    minimumResultsForSearch: 20,
                    multiple: true,
                    width: 'auto',
                    language: "zh-CN",
                });
                $("#anamnesis_vascula_diseases_types").on('change', function(event) {
                    if ($(this).val()) {
                        app.mr.anamnesis.vascular_diseases.types = $(this).val().toString();
                    } else {
                        app.mr.anamnesis.vascular_diseases.types = "";
                    }
                });
                $("#hemorrhage_repeater select[name*='type_name']").select2({
                    placeholder: "选择",
                    data: pageData.anamnesis.hemorrhage_type_name_list,
                    allowClear: true,
                    minimumResultsForSearch: 20,
                    width: 'auto',
                    language: "zh-CN",
                });
                $("#bleeding_repeater select[name*='cause']").select2({
                    placeholder: "选择",
                    data: pageData.anamnesis.bleeding_cause_list,
                    allowClear: true,
                    minimumResultsForSearch: 20,
                    width: 'auto',
                    language: "zh-CN",
                });
                //既往病史部分结束
                //家族史部分开始
                $("select[name*='onset_member']").select2({
                    placeholder: "选择",
                    data: pageData.family_history.onset_member_list,
                    allowClear: true,
                    minimumResultsForSearch: 20,
                    width: 'auto',
                    language: "zh-CN",
                });
                $("select[name*='gender']").select2({
                    placeholder: "选择",
                    data: pageData.family_history.gender_list,
                    allowClear: true,
                    minimumResultsForSearch: 20,
                    width: 'auto',
                    language: "zh-CN",
                });
                $("select[name*='onset_type']").select2({
                    placeholder: "选择",
                    data: pageData.family_history.premature_chd_type_list,
                    allowClear: true,
                    minimumResultsForSearch: 20,
                    width: 'auto',
                    language: "zh-CN",
                });
                $("select[name*='etiology']").select2({
                    placeholder: "选择",
                    data: pageData.family_history.sudden_death_etiologie_list,
                    allowClear: true,
                    minimumResultsForSearch: 20,
                    width: 'auto',
                    language: "zh-CN",
                });
                $("select[name*='etiology']").on('change', function(event) {
                    if ($(this).val() == '4') {
                        $(this).parent().next('.col-md-2').removeClass('hide');
                    } else {
                        $(this).parent().next('.col-md-2').find('input').val("");
                        $(this).parent().next('.col-md-2').addClass('hide');
                    }
                });
                //家族史部分结束
                //体格检查部分结束
                $("select[name*='lung_wet_rales_range']").select2({
                    placeholder: "选择",
                    data: pageData.physical_examination.lung_wet_rales_range_list,
                    allowClear: true,
                    minimumResultsForSearch: 20,
                    width: 'auto',
                    language: "zh-CN",
                });
                $("#physical_examination_lung_wet_rales_range").on('change', function(event) {
                    app.mr.physical_examination.lung_wet_rales_range = $(this).val();
                });
                $("select[name*='heart_sound_S1_result']").select2({
                    placeholder: "选择",
                    data: pageData.physical_examination.heart_sound_S1_result_list,
                    allowClear: true,
                    minimumResultsForSearch: 20,
                    width: 'auto',
                    language: "zh-CN",
                });
                $("#physical_examination_heart_sound_S1_result").on('change', function(event) {
                    app.mr.physical_examination.heart_sound_S1_result = $(this).val();
                });
                $("select[name*='Killip_class']").select2({
                    placeholder: "选择",
                    data: pageData.physical_examination.Killip_class_list,
                    allowClear: true,
                    minimumResultsForSearch: 20,
                    width: 'auto',
                    language: "zh-CN",
                });
                $("#physical_examination_Killip_class").on('change', function(event) {
                    app.mr.physical_examination.Killip_class = $(this).val();
                });
                $("select[name*='ear_lobe_longitudinal_crack_parts']").select2({
                    placeholder: "选择",
                    data: pageData.physical_examination.ear_lobe_longitudinal_crack_part_list,
                    allowClear: true,
                    minimumResultsForSearch: 20,
                    multiple: true,
                    width: 'auto',
                    language: "zh-CN",
                });
                $("#physical_examination_ear_lobe_longitudinal_crack_parts").on('change', function(event) {
                    if ($(this).val()) {
                        app.mr.physical_examination.ear_lobe_longitudinal_crack_parts = $(this).val().toString();
                    } else {
                        app.mr.physical_examination.ear_lobe_longitudinal_crack_parts = "";
                    }
                });
                $("select[name*='skin_yellow_pigment_tumor_parts']").select2({
                    placeholder: "选择",
                    data: pageData.physical_examination.skin_yellow_pigment_tumor_part_list,
                    allowClear: true,
                    minimumResultsForSearch: 20,
                    multiple: true,
                    width: 'auto',
                    language: "zh-CN",
                });
                $("#physical_examination_skin_yellow_pigment_tumor_parts").on('change', function(event) {
                    if ($(this).val()) {
                        app.mr.physical_examination.skin_yellow_pigment_tumor_parts = $(this).val().toString();
                    } else {
                        app.mr.physical_examination.skin_yellow_pigment_tumor_parts = "";
                    }
                });
                $("select[name*='alopecia_parts']").select2({
                    placeholder: "选择",
                    data: pageData.physical_examination.alopecia_part_list,
                    allowClear: true,
                    minimumResultsForSearch: 20,
                    multiple: true,
                    width: 'auto',
                    language: "zh-CN",
                });
                $("#physical_examination_alopecia_parts").on('change', function(event) {
                    if ($(this).val()) {
                        app.mr.physical_examination.alopecia_parts = $(this).val().toString();
                    } else {
                        app.mr.physical_examination.alopecia_parts = "";
                    }
                });
                //体格检查部分结束
                //常规检查部分开始
                $("select[name*='is_INR_stable']").select2({
                    placeholder: "选择",
                    data: pageData.routine_examination.is_INR_stable_list,
                    allowClear: true,
                    minimumResultsForSearch: 20,
                    width: 'auto',
                    language: "zh-CN",
                });
                $("#routine_examination_is_INR_stable").on('change', function(event) {
                    app.mr.routine_examination.coagulation_function.is_INR_stable = $(this).val();
                });
                //常规检查部分结束
                //特殊检查部分开始
                $("select[name*='q_wave_leads']").select2({
                    placeholder: "选择",
                    data: pageData.special_examination.lead_list,
                    allowClear: true,
                    minimumResultsForSearch: 20,
                    multiple: true,
                    width: 'auto',
                    language: "zh-CN",
                });
                $("#ecg_q_wave_leads").on('change', function(event) {
                    if ($(this).val()) {
                        app.mr.special_examination.ecg.pathological_q_wave.q_wave_leads = $(this).val().toString();
                    } else {
                        app.mr.special_examination.ecg.pathological_q_wave.q_wave_leads = "";
                    }
                });
                $("select[name='ecg_arrhythmia_type']").select2({
                    placeholder: "选择",
                    data: pageData.special_examination.arrhythmia_type_list,
                    allowClear: true,
                    minimumResultsForSearch: 20,
                    multiple: true,
                    width: 'auto',
                    language: "zh-CN",
                });
                $("#ecg_arrhythmia_type").on('change', function(event) {
                    if ($(this).val()) {
                        app.ecg_arrhythmia_type.arrhythmia_types = $(this).val().toString();
                    } else {
                        app.ecg_arrhythmia_type.arrhythmia_types = "";
                    }
                });
                $("#holter_ecg_arrhythmia_repeater select[name*='arrhythmia_type']").select2({
                    placeholder: "选择",
                    data: pageData.special_examination.arrhythmia_type_list,
                    allowClear: true,
                    minimumResultsForSearch: 20,
                    width: 'auto',
                    language: "zh-CN",
                });
                $("#holter_ecg_arrhythmia_repeater select[name*='arrhythmia_type']").on('change', function(event) {
                    if ($(this).val() == '11') {
                        $(this).parent().next('.col-md-2').removeClass('hide');
                    } else {
                        $(this).parent().next('.col-md-2').find('input').val("");
                        $(this).parent().next('.col-md-2').addClass('hide');
                    }
                });
                $("select[name*='waveforms']").select2({
                    placeholder: "选择",
                    data: pageData.special_examination.ecg_waveform_list,
                    allowClear: true,
                    minimumResultsForSearch: 20,
                    language: "zh-CN",
                });
                $("#ecg_t_wave_lead_I_waveforms").on('change', function(event) {
                    app.mr.special_examination.ecg.t_wave_change.change_detail.lead_I_waveforms = $(this).val();
                });
                $("#ecg_t_wave_lead_II_waveforms").on('change', function(event) {
                    app.mr.special_examination.ecg.t_wave_change.change_detail.lead_II_waveforms = $(this).val();
                });
                $("#ecg_t_wave_lead_III_waveforms").on('change', function(event) {
                    app.mr.special_examination.ecg.t_wave_change.change_detail.lead_III_waveforms = $(this).val();
                });
                $("#ecg_t_wave_lead_aVR_waveforms").on('change', function(event) {
                    app.mr.special_examination.ecg.t_wave_change.change_detail.lead_aVR_waveforms = $(this).val();
                });
                $("#ecg_t_wave_lead_aVL_waveforms").on('change', function(event) {
                    app.mr.special_examination.ecg.t_wave_change.change_detail.lead_aVL_waveforms = $(this).val();
                });
                $("#ecg_t_wave_lead_aVF_waveforms").on('change', function(event) {
                    app.mr.special_examination.ecg.t_wave_change.change_detail.lead_aVF_waveforms = $(this).val();
                });
                $("#ecg_t_wave_lead_V1_waveforms").on('change', function(event) {
                    app.mr.special_examination.ecg.t_wave_change.change_detail.lead_V1_waveforms = $(this).val();
                });
                $("#ecg_t_wave_lead_V2_waveforms").on('change', function(event) {
                    app.mr.special_examination.ecg.t_wave_change.change_detail.lead_V2_waveforms = $(this).val();
                });
                $("#ecg_t_wave_lead_V3_waveforms").on('change', function(event) {
                    app.mr.special_examination.ecg.t_wave_change.change_detail.lead_V3_waveforms = $(this).val();
                });
                $("#ecg_t_wave_lead_V4_waveforms").on('change', function(event) {
                    app.mr.special_examination.ecg.t_wave_change.change_detail.lead_V4_waveforms = $(this).val();
                });
                $("#ecg_t_wave_lead_V5_waveforms").on('change', function(event) {
                    app.mr.special_examination.ecg.t_wave_change.change_detail.lead_V5_waveforms = $(this).val();
                });
                $("#ecg_t_wave_lead_V6_waveforms").on('change', function(event) {
                    app.mr.special_examination.ecg.t_wave_change.change_detail.lead_V6_waveforms = $(this).val();
                });
                $("#ecg_t_wave_lead_V7_waveforms").on('change', function(event) {
                    app.mr.special_examination.ecg.t_wave_change.change_detail.lead_V7_waveforms = $(this).val();
                });
                $("#ecg_t_wave_lead_V8_waveforms").on('change', function(event) {
                    app.mr.special_examination.ecg.t_wave_change.change_detail.lead_V8_waveforms = $(this).val();
                });
                $("#ecg_t_wave_lead_V9_waveforms").on('change', function(event) {
                    app.mr.special_examination.ecg.t_wave_change.change_detail.lead_V9_waveforms = $(this).val();
                });
                $("#exercise_ecg_t_wave_lead_I_waveforms").on('change', function(event) {
                    app.mr.special_examination.exercise_ecg.t_wave_change.change_detail.lead_I_waveforms = $(this).val();
                });
                $("#exercise_ecg_t_wave_lead_II_waveforms").on('change', function(event) {
                    app.mr.special_examination.exercise_ecg.t_wave_change.change_detail.lead_II_waveforms = $(this).val();
                });
                $("#exercise_ecg_t_wave_lead_III_waveforms").on('change', function(event) {
                    app.mr.special_examination.exercise_ecg.t_wave_change.change_detail.lead_III_waveforms = $(this).val();
                });
                $("#exercise_ecg_t_wave_lead_aVR_waveforms").on('change', function(event) {
                    app.mr.special_examination.exercise_ecg.t_wave_change.change_detail.lead_aVR_waveforms = $(this).val();
                });
                $("#exercise_ecg_t_wave_lead_aVL_waveforms").on('change', function(event) {
                    app.mr.special_examination.exercise_ecg.t_wave_change.change_detail.lead_aVL_waveforms = $(this).val();
                });
                $("#exercise_ecg_t_wave_lead_aVF_waveforms").on('change', function(event) {
                    app.mr.special_examination.exercise_ecg.t_wave_change.change_detail.lead_aVF_waveforms = $(this).val();
                });
                $("#exercise_ecg_t_wave_lead_V1_waveforms").on('change', function(event) {
                    app.mr.special_examination.exercise_ecg.t_wave_change.change_detail.lead_V1_waveforms = $(this).val();
                });
                $("#exercise_ecg_t_wave_lead_V2_waveforms").on('change', function(event) {
                    app.mr.special_examination.exercise_ecg.t_wave_change.change_detail.lead_V2_waveforms = $(this).val();
                });
                $("#exercise_ecg_t_wave_lead_V3_waveforms").on('change', function(event) {
                    app.mr.special_examination.exercise_ecg.t_wave_change.change_detail.lead_V3_waveforms = $(this).val();
                });
                $("#exercise_ecg_t_wave_lead_V4_waveforms").on('change', function(event) {
                    app.mr.special_examination.exercise_ecg.t_wave_change.change_detail.lead_V4_waveforms = $(this).val();
                });
                $("#exercise_ecg_t_wave_lead_V5_waveforms").on('change', function(event) {
                    app.mr.special_examination.exercise_ecg.t_wave_change.change_detail.lead_V5_waveforms = $(this).val();
                });
                $("#exercise_ecg_t_wave_lead_V6_waveforms").on('change', function(event) {
                    app.mr.special_examination.exercise_ecg.t_wave_change.change_detail.lead_V6_waveforms = $(this).val();
                });
                $("#exercise_ecg_t_wave_lead_V7_waveforms").on('change', function(event) {
                    app.mr.special_examination.exercise_ecg.t_wave_change.change_detail.lead_V7_waveforms = $(this).val();
                });
                $("#exercise_ecg_t_wave_lead_V8_waveforms").on('change', function(event) {
                    app.mr.special_examination.exercise_ecg.t_wave_change.change_detail.lead_V8_waveforms = $(this).val();
                });
                $("#exercise_ecg_t_wave_lead_V9_waveforms").on('change', function(event) {
                    app.mr.special_examination.exercise_ecg.t_wave_change.change_detail.lead_V9_waveforms = $(this).val();
                });


                $("select[name*='ucg_parts']").select2({
                    placeholder: "选择",
                    data: pageData.special_examination.ucg_part_list,
                    allowClear: true,
                    minimumResultsForSearch: 20,
                    multiple: true,
                    width: 'auto',
                    language: "zh-CN",
                });
                $("#local_motion_abnormality_parts").on('change', function(event) {
                    if ($(this).val()) {
                        app.mr.special_examination.ucg.local_motion_abnormality_parts = $(this).val().toString();
                    } else {
                        app.mr.special_examination.ucg.local_motion_abnormality_parts = "";
                    }
                });
                $("#vntricular_aneurysm_parts").on('change', function(event) {
                    if ($(this).val()) {
                        app.mr.special_examination.ucg.vntricular_aneurysm_parts = $(this).val().toString();
                    } else {
                        app.mr.special_examination.ucg.vntricular_aneurysm_parts = "";
                    }
                });
                $("#left_ventricular_thrombosis_parts").on('change', function(event) {
                    if ($(this).val()) {
                        app.mr.special_examination.ucg.left_ventricular_thrombosis_parts = $(this).val().toString();
                    } else {
                        app.mr.special_examination.ucg.left_ventricular_thrombosis_parts = "";
                    }
                });

                $("select[name*='pci_type']").select2({
                    placeholder: "选择",
                    data: pageData.special_examination.pci_type_list,
                    allowClear: true,
                    minimumResultsForSearch: 20,
                    width: 'auto',
                    language: "zh-CN",
                });
                $("#pci_type").on('change', function(event) {
                    app.mr.special_examination.pci.type = $(this).val();
                });
                $("select[name*='contrast_media']").select2({
                    placeholder: "选择",
                    data: pageData.special_examination.contrast_medium_list,
                    allowClear: true,
                    minimumResultsForSearch: 20,
                    multiple: true,
                    width: 'auto',
                    language: "zh-CN",
                });
                $("#pci_contrast_media").on('change', function(event) {
                    if ($(this).val()) {
                        app.mr.special_examination.pci.contrast_media = $(this).val().toString();
                    } else {
                        app.mr.special_examination.pci.contrast_media = "";
                    }
                });
                $("select[name*='pci_paths']").select2({
                    placeholder: "选择",
                    data: pageData.special_examination.pci_path_list,
                    allowClear: true,
                    minimumResultsForSearch: 20,
                    multiple: true,
                    width: 'auto',
                    language: "zh-CN",
                });
                $("#pci_paths").on('change', function(event) {
                    if ($(this).val()) {
                        app.mr.special_examination.pci.pci_paths = $(this).val().toString();
                    } else {
                        app.mr.special_examination.pci.pci_paths = "";
                    }
                });
                $("#segmental_lesions_repeater select[name*='num']").select2({
                    placeholder: "选择",
                    data: pageData.special_examination.segmental_lesions_num_list,
                    allowClear: true,
                    minimumResultsForSearch: 20,
                    width: 'auto',
                    language: "zh-CN",
                });
                $("#segmental_lesions_repeater select[name*='shape']").select2({
                    placeholder: "选择",
                    data: pageData.special_examination.segmental_lesions_shape_list,
                    allowClear: true,
                    minimumResultsForSearch: 20,
                    width: 'auto',
                    language: "zh-CN",
                });
                $("select[name*='is_calcification']").select2({
                    placeholder: "选择",
                    data: pageData.special_examination.is_calcification_list,
                    allowClear: true,
                    minimumResultsForSearch: 20,
                    width: 'auto',
                    language: "zh-CN",
                });
                $("select[name*='is_ostial_lesion']").select2({
                    placeholder: "选择",
                    data: pageData.special_examination.is_ostial_lesion_list,
                    allowClear: true,
                    minimumResultsForSearch: 20,
                    width: 'auto',
                    language: "zh-CN",
                });
                $("select[name*='is_thrombus']").select2({
                    placeholder: "选择",
                    data: pageData.special_examination.is_thrombus_list,
                    allowClear: true,
                    minimumResultsForSearch: 20,
                    width: 'auto',
                    language: "zh-CN",
                });
                $("select[name*='TIMI_grade']").select2({
                    placeholder: "选择",
                    data: pageData.special_examination.TIMI_grade_list,
                    allowClear: true,
                    minimumResultsForSearch: 20,
                    width: 'auto',
                    language: "zh-CN",
                });
                $("select[name*='kinds_of_lesions']").select2({
                    placeholder: "选择",
                    data: pageData.special_examination.kinds_of_lesions_list,
                    allowClear: true,
                    minimumResultsForSearch: 20,
                    width: 'auto',
                    language: "zh-CN",
                });
                //特殊检查部分结束
                //入院诊断部分开始
                $("#admission_diagnosis_effort_angina_pectoris_ccs").on('change', function(event) {
                    app.mr.admission_diagnosis.effort_angina_pectoris_ccs = $(this).val();
                });
                //入院诊断部分结束
                //出院诊断部分开始
                $("#discharge_diagnosis_effort_angina_pectoris_ccs").on('change', function(event) {
                    app.mr.discharge_diagnosis.effort_angina_pectoris_ccs = $(this).val();
                });
                //出院诊断部分结束
            }
        }
    }();
    var DateTimePickers = function() {
        var handleDatePickers = function() {

            if (jQuery().datepicker) {
                $('.date-picker').datepicker({
                    autoclose: true,
                    format: 'yyyy-mm-dd',
                    endDate: '0d',
                    language: 'zh-CN',
                    todayHighlight: true
                });
                //$('body').removeClass("modal-open"); // fix bug when inline picker is used in modal

                $('#birthday').datepicker().on('changeDate', function(e) {
                    // `e` here contains the extra attributes
                    // console.log(e.date);
                    app.mr.basic_info.patient.birthday = $(this).find('input').val();
                });
            }

            /* Workaround to restrict daterange past date select: http://stackoverflow.com/questions/11933173/how-to-restrict-the-selectable-date-ranges-in-bootstrap-datepicker */

            // Workaround to fix datepicker position on window scroll
            $(document).scroll(function() {
                $('#submit_form .date-picker').datepicker('place'); //#modal is the id of the modal
            });


        };
        return {
            init: function() {
                handleDatePickers();
            }
        }
    }();

    var DataLocation = function() {
        return {
            init: function() {

                $('#birthPlace').citys({
                    required: false,
                    valueType: 'name'
                });

                var $town = $('#addressPlace select[name="town"]');
                var townFormat = function(info) {
                    $town.hide().empty();
                    if (info['code'] % 1e4 && info['code'] < 7e6) { //是否为“区”且不是港澳台地区
                        $.ajax({
                            // url: '../assets/global/plugins/jquery-citys/town/' + info['code'] + '.json',
                            url: 'http://passer-by.com/data_location/town/' + info['code'] + '.json',
                            dataType: 'json',
                            success: function(town) {
                                $town.show();
                                $town.append('<option value=""></option>');
                                for (i in town) {
                                    $town.append('<option value="' + town[i] + '">' + town[i] + '</option>');
                                }
                                if (town.length <= 0) {
                                    $("#address_town").prop("disabled", true);
                                } else {
                                    $("#address_town").prop("disabled", false);
                                }
                            }
                        });
                    }
                };
                $('#addressPlace').citys({
                    required: false,
                    valueType: 'name',
                    onChange: function(info) {
                        townFormat(info);
                    }
                }, function(api) {
                    var info = api.getInfo();
                    townFormat(info);
                });
            }
        }
    }();

    var FormRepeater = function() {

        return {
            //main function to initiate the module
            init: function() {
                $('.mt-repeater').each(function() {
                    $(this).repeater({
                        show: function() {
                            $('.select2-container').remove();

                            //重新初始化icheck
                            FormiCheck.init();
                            //重新初始化select2
                            FormSelect2.init();

                            /////////////////////////////////////////
                            //原因未知，不加下面的代码长程ecg增加t波改变，波形下拉无法正常显示
                            $("select[name*='waveforms']").select2({
                                placeholder: "选择",
                                data: pageData.special_examination.ecg_waveform_list,
                                allowClear: true,
                                minimumResultsForSearch: 20,
                                language: "zh-CN",
                            });
                            /////////////////////////////////////////
                            $(this).slideDown();
                        },

                        hide: function(deleteElement) {
                            if (confirm('是否确定删除该栏？')) {
                                $(this).slideUp(deleteElement);
                            }
                        },
                        ready: function(setIndexes) {

                        },
                        isFirstItemUndeletable: true
                    });
                });

                $('#submitBtn').click(function() {
                    console.log($('#chest_pain_repeater').repeaterVal());
                    console.log($('#chest_distress_repeater').repeaterVal());
                })
                $('#submitBtn1').click(function() {
                    console.log($('#premature_chd_repeater').repeaterVal());
                    console.log($('#myocardial_infarction_repeater').repeaterVal());
                    console.log($('#ischemic_stroke_repeater').repeaterVal());
                    console.log($('#hemorrhagic_stroke_repeater').repeaterVal());
                    console.log($('#sudden_death_repeater').repeaterVal());
                })
                $('#submitBtn5').click(function() {
                    console.log($('#segmental_lesions_repeater').repeaterVal());
                })
                $('#printBtn').click(function() {
                    console.log($('#holter_ecg_arrhythmia_repeater').repeaterVal());
                    console.log($('#holter_ecg_pathological_q_wave_repeater').repeaterVal());
                    console.log($('#holter_ecg_st_segment_depression_repeater').repeaterVal());
                    console.log($('#holter_ecg_st_segment_elevation_repeater').repeaterVal());
                    console.log($('#holter_ecg_t_wave_change_repeater').repeaterVal());
                })
            }

        };

    }();

    var app = new Vue({
        el: '#app',
        data: {
            //病历medical_record
            mr: JSON.parse(`
            {
                "basic_info": {
                    "is_hospitalized": "",
                    "admission_num": "",
                    "bed_num": "",
                    "patient": {
                        "name": "",
                        "medical_card_number": "",
                        "id_number": "",
                        "gender": "",
                        "nationality": "",
                        "birth_province": "",
                        "birth_city": "",
                        "birthday":"",
                        "telephone": "",
                        "cellphone_1": "",
                        "cellphone_2": "",
                        "profession": "",
                        "address_province": "",
                        "address_city": "",
                        "address_area": "",
                        "address_town": "",
                        "address": ""
                    },
                    "doctor_id": "",
                    "recorder_id": ""
                },
                "history_of_present_illness": {
                    "care_causes": "",
                    "care_cause_others": "",
                    "diseases": [],
                    "is_angina_pectoris": "",
                    "angina_pectoris_ccs": "",
                    "is_exertional_angina_attacks_within_4_weeks": ""
                },
                "anamnesis": {
                    "lipid_abnormality": {
                        "is_lipid_abnormality": "",
                        "type": "",
                        "duration": "",
                        "is_under_treatment": "",
                        "drug_name": ""
                    },
                    "essential_hypertension": {
                        "is_essential_hypertension": "",
                        "duration": "",
                        "maximum_value": "",
                        "ordinary_value": "",
                        "is_under_treatment": "",
                        "drug_name": ""
                    },
                    "dysglycemia": {
                        "is_dysglycemia": "",
                        "duration": "",
                        "type": "",
                        "diabetes_mellitus": {
                            "is_diabetes_mellitus": "",
                            "is_under_treatment": "",
                            "treatment_method": "",
                            "oral_drug_name": ""
                        }
                    },
                    "gout": {
                        "is_gout": "",
                        "duration": "",
                        "serum_uric_acid_level": "",
                        "renal_insufficiency": {
                            "is_renal_insufficiency": "",
                            "duration": "",
                            "maximum_Cr": "",
                            "recent_Cr": "",
                            "etiology": ""
                        }
                    },
                    "heart_diseases": {
                        "old_myocardial_infarction": {
                            "is_old_myocardial_infarction": "",
                            "onset_time_year": "",
                            "onset_time_month": "",
                            "onset_frequency": "",
                            "location": "",
                            "location_others": ""
                        },
                        "is_pci_history": "",
                        "is_cabg_history": "",
                        "is_cas_gt50_history": "",
                        "is_atrial_fibrillation": "",
                        "other_heart_disease": {
                            "is_other_heart_disease_history": "",
                            "type": "",
                            "type_others": ""
                        }
                    },
                    "deep_venou_thrombosis": {
                        "is_deep_venou_thrombosis": "",
                        "onset_time_year": "",
                        "onset_time_month": "",
                        "inducements": "",
                        "symptoms": "",
                        "diagnosis_result": ""
                    },
                    "old_ischemic_stroke": {
                        "is_old_ischemic_stroke": "",
                        "types": []
                    },
                    "vascular_diseases": {
                        "is_vascular_diseases": "",
                        "types": ""
                    },
                    "hemorrhage": {
                        "is_hemorrhage": "",
                        "types": []
                    },
                    "bleeding": {
                        "is_bleeding": "",
                        "causes": []
                    }
                },
                "risk_factors": {
                    "smoking": {
                        "is_somking": "",
                        "duration": "",
                        "pieces_per_day": "",
                        "cigrette_type": "",
                        "cigrette_type_others": "",
                        "is_smoking_cessation": "",
                        "smoking_cessation_duration": ""
                    },
                    "drinking": {
                        "is_drinking": "",
                        "duration": "",
                        "tales_per_day": "",
                        "wine_type": "",
                        "wine_type_others": "",
                        "is_temperance": "",
                        "temperance_duration": ""
                    },
                    "diet_habits": {
                        "drinking_amount": "",
                        "paddy_potato": "",
                        "grain_mixed_beans": "",
                        "potato": "",
                        "vegetables": "",
                        "fruits": "",
                        "livestock_meat": "",
                        "aquatic_products": "",
                        "eggs": "",
                        "milk_products": "",
                        "soybeans_nuts": "",
                        "salt": "",
                        "sugar": "",
                        "oil": "",
                        "fat_meat": "",
                        "visceral": ""
                    },
                    "psychosocial_factors": {
                        "blood_type": "",
                        "is_longterm_psychological_stress": "",
                        "is_depression": ""
                    },
                    "exercise": {
                        "type": "",
                        "duration": "",
                        "mode": "",
                        "mode_others": ""
                    },
                    "central_obesity": {
                        "is_central_obesity": "",
                        "duration": "",
                        "height": "",
                        "weight": "",
                        "waistline": "",
                        "neck_circumference": "",
                        "hipline": ""
                    }
                },
                "family_history": [],
                "physical_examination": {
                    "body_temperature": "",
                    "respiratory_rate": "",
                    "is_breath_sounds_normal": "",
                    "is_lung_wet_rales": "",
                    "lung_wet_rales_range": "",
                    "heart_rate": "",
                    "cardiac_rhythm": "",
                    "heart_sound_S1_result": "",
                    "is_S3S4_gallop_rhythm": "",
                    "pulse": "",
                    "blood_pressure": "",
                    "is_heart_failure": "",
                    "Killip_class": "",
                    "is_ear_lobe_longitudinal_crack": "",
                    "ear_lobe_longitudinal_crack_parts": "",
                    "is_skin_yellow_pigment_tumor": "",
                    "skin_yellow_pigment_tumor_parts": "",
                    "is_alopecia": "",
                    "alopecia_parts": ""
                },
                "routine_examination": {
                    "blood_biochemistry": {
                        "TC": "",
                        "TG": "",
                        "LDL": "",
                        "HDL": "",
                        "not_HDL": "",
                        "blood_glucose_fasting": "",
                        "is_serum_myocardial_necrosis_markers_up": "",
                        "myocardial_CK": "",
                        "myocardial_CKMB": "",
                        "myocardial_cTnI": "",
                        "myocardial_Mb": "",
                        "is_inflammatory_markers_up": "",
                        "inflammation_hsCRP": "",
                        "inflammation_IL6": "",
                        "inflammation_IL1_beta": "",
                        "inflammation_TNF_alpha": "",
                        "heart_failure_NTproBNP": "",
                        "electrolyte_Na": "",
                        "electrolyte_K": "",
                        "electrolyte_Ca": "",
                        "electrolyte_Cl": "",
                        "is_abnormal_liver_function": "",
                        "total_protein": "",
                        "albumin": "",
                        "total_bilirubin": "",
                        "direct_bilirubin": "",
                        "indirect_bilirubin": "",
                        "ALT": "",
                        "AST": "",
                        "is_renal_insufficiency": "",
                        "Cr": "",
                        "UA": "",
                        "BUN": "",
                        "GFR": "",
                        "is_hepatorenal_disease": ""
                    },
                    "coagulation_function": {
                        "APTT": "",
                        "PT": "",
                        "TT": "",
                        "FIB": "",
                        "d_dimer": "",
                        "INR": "",
                        "is_INR_stable": ""
                    },
                    "blood_routine": {
                        "red_blood_cell_count": "",
                        "red_blood_cell_specific_volume": "",
                        "HGB": "",
                        "leukocyte_count": "",
                        "neutrophil": "",
                        "eosinophil": "",
                        "basophil": "",
                        "lymphocyte": "",
                        "monocyte": "",
                        "is_qualitative_plateletdefects": "",
                        "platelet_count_PLT": "",
                        "MPV": "",
                        "PDW": "",
                        "PAR_ADP": "",
                        "PAR_epinephrine": "",
                        "PAR_arachidonic_acid": "",
                        "PAR_collagen": "",
                        "PAR_ristocetin": ""
                    }
                },
                "special_examination": {
                    "ecg": {
                        "pathological_q_wave": {
                            "is_pathological_q_wave": "",
                            "q_wave_leads": ""
                        },
                        "st_segment_change": {
                            "is_st_segment_change": "",
                            "st_segment_changes": [{
                                "is_st_segment_depression": "",
                                "change_detail": {
                                    "is_lead_I": "",
                                    "lead_I_amplitude": "",
                                    "is_lead_II": "",
                                    "lead_II_amplitude": "",
                                    "is_lead_III": "",
                                    "lead_III_amplitude": "",
                                    "is_lead_aVR": "",
                                    "lead_aVR_amplitude": "",
                                    "is_lead_aVL": "",
                                    "lead_aVL_amplitude": "",
                                    "is_lead_aVF": "",
                                    "lead_aVF_amplitude": "",
                                    "is_lead_V1": "",
                                    "lead_V1_amplitude": "",
                                    "is_lead_V2": "",
                                    "lead_V2_amplitude": "",
                                    "is_lead_V3": "",
                                    "lead_V3_amplitude": "",
                                    "is_lead_V4": "",
                                    "lead_V4_amplitude": "",
                                    "is_lead_V5": "",
                                    "lead_V5_amplitude": "",
                                    "is_lead_V6": "",
                                    "lead_V6_amplitude": "",
                                    "is_lead_V7": "",
                                    "lead_V7_amplitude": "",
                                    "is_lead_V8": "",
                                    "lead_V8_amplitude": "",
                                    "is_lead_V9": "",
                                    "lead_V9_amplitude": ""
                                }
                            },
                            {
                                "is_st_segment_elevation": "",
                                "change_detail": {
                                    "is_lead_I": "",
                                    "lead_I_amplitude": "",
                                    "is_lead_II": "",
                                    "lead_II_amplitude": "",
                                    "is_lead_III": "",
                                    "lead_III_amplitude": "",
                                    "is_lead_aVR": "",
                                    "lead_aVR_amplitude": "",
                                    "is_lead_aVL": "",
                                    "lead_aVL_amplitude": "",
                                    "is_lead_aVF": "",
                                    "lead_aVF_amplitude": "",
                                    "is_lead_V1": "",
                                    "lead_V1_amplitude": "",
                                    "is_lead_V2": "",
                                    "lead_V2_amplitude": "",
                                    "is_lead_V3": "",
                                    "lead_V3_amplitude": "",
                                    "is_lead_V4": "",
                                    "lead_V4_amplitude": "",
                                    "is_lead_V5": "",
                                    "lead_V5_amplitude": "",
                                    "is_lead_V6": "",
                                    "lead_V6_amplitude": "",
                                    "is_lead_V7": "",
                                    "lead_V7_amplitude": "",
                                    "is_lead_V8": "",
                                    "lead_V8_amplitude": "",
                                    "is_lead_V9": "",
                                    "lead_V9_amplitude": ""
                                }
                            }]
                        },
                        "t_wave_change": {
                            "is_t_wave_change": "",
                            "change_detail": {
                                "is_lead_I": "",
                                "lead_I_waveforms": "",
                                "lead_I_amplitude": "",
                                "is_lead_II": "",
                                "lead_II_waveforms": "",
                                "lead_II_amplitude": "",
                                "is_lead_III": "",
                                "lead_III_waveforms": "",
                                "lead_III_amplitude": "",
                                "is_lead_aVR": "",
                                "lead_aVR_waveforms": "",
                                "lead_aVR_amplitude": "",
                                "is_lead_aVL": "",
                                "lead_aVL_waveforms": "",
                                "lead_aVL_amplitude": "",
                                "is_lead_aVF": "",
                                "lead_aVF_waveforms": "",
                                "lead_aVF_amplitude": "",
                                "is_lead_V1": "",
                                "lead_V1_waveforms": "",
                                "lead_V1_amplitude": "",
                                "is_lead_V2": "",
                                "lead_V2_waveforms": "",
                                "lead_V2_amplitude": "",
                                "is_lead_V3": "",
                                "lead_V3_waveforms": "",
                                "lead_V3_amplitude": "",
                                "is_lead_V4": "",
                                "lead_V4_waveforms": "",
                                "lead_V4_amplitude": "",
                                "is_lead_V5": "",
                                "lead_V5_waveforms": "",
                                "lead_V5_amplitude": "",
                                "is_lead_V6": "",
                                "lead_V6_waveforms": "",
                                "lead_V6_amplitude": "",
                                "is_lead_V7": "",
                                "lead_V7_waveforms": "",
                                "lead_V7_amplitude": "",
                                "is_lead_V8": "",
                                "lead_V8_waveforms": "",
                                "lead_V8_amplitude": "",
                                "is_lead_V9": "",
                                "lead_V9_waveforms": "",
                                "lead_V9_amplitude": ""
                            }
                        },
                        "arrhythmia": {
                            "is_arrhythmia": "",
                            "arrhythmia_types": []
                        },
                        "is_result_normal": "",
                        "findings": ""
                    },
                    "exercise_ecg": {
                        "is_exercise_angina": "",
                        "exercise_duration": "",
                        "maximal_blood_pressure": "",
                        "minimal_blood_pressure": "",
                        "st_segment_change": {
                            "is_st_segment_change": "",
                            "st_segment_changes": [{
                                "is_st_segment_depression": "",
                                "duration": "",
                                "change_detail": {
                                    "is_lead_I": "",
                                    "lead_I_amplitude": "",
                                    "is_lead_II": "",
                                    "lead_II_amplitude": "",
                                    "is_lead_III": "",
                                    "lead_III_amplitude": "",
                                    "is_lead_aVR": "",
                                    "lead_aVR_amplitude": "",
                                    "is_lead_aVL": "",
                                    "lead_aVL_amplitude": "",
                                    "is_lead_aVF": "",
                                    "lead_aVF_amplitude": "",
                                    "is_lead_V1": "",
                                    "lead_V1_amplitude": "",
                                    "is_lead_V2": "",
                                    "lead_V2_amplitude": "",
                                    "is_lead_V3": "",
                                    "lead_V3_amplitude": "",
                                    "is_lead_V4": "",
                                    "lead_V4_amplitude": "",
                                    "is_lead_V5": "",
                                    "lead_V5_amplitude": "",
                                    "is_lead_V6": "",
                                    "lead_V6_amplitude": "",
                                    "is_lead_V7": "",
                                    "lead_V7_amplitude": "",
                                    "is_lead_V8": "",
                                    "lead_V8_amplitude": "",
                                    "is_lead_V9": "",
                                    "lead_V9_amplitude": ""
                                }
                            },{
                                "is_st_segment_elevation": "",
                                "duration": "",
                                "change_detail": {
                                    "is_lead_I": "",
                                    "lead_I_amplitude": "",
                                    "is_lead_II": "",
                                    "lead_II_amplitude": "",
                                    "is_lead_III": "",
                                    "lead_III_amplitude": "",
                                    "is_lead_aVR": "",
                                    "lead_aVR_amplitude": "",
                                    "is_lead_aVL": "",
                                    "lead_aVL_amplitude": "",
                                    "is_lead_aVF": "",
                                    "lead_aVF_amplitude": "",
                                    "is_lead_V1": "",
                                    "lead_V1_amplitude": "",
                                    "is_lead_V2": "",
                                    "lead_V2_amplitude": "",
                                    "is_lead_V3": "",
                                    "lead_V3_amplitude": "",
                                    "is_lead_V4": "",
                                    "lead_V4_amplitude": "",
                                    "is_lead_V5": "",
                                    "lead_V5_amplitude": "",
                                    "is_lead_V6": "",
                                    "lead_V6_amplitude": "",
                                    "is_lead_V7": "",
                                    "lead_V7_amplitude": "",
                                    "is_lead_V8": "",
                                    "lead_V8_amplitude": "",
                                    "is_lead_V9": "",
                                    "lead_V9_amplitude": ""
                                }
                            }]
                        },
                        "t_wave_change": {
                            "is_t_wave_change": "",
                            "duration": "",
                            "change_detail": {
                                "is_lead_I": "",
                                "lead_I_waveforms": "",
                                "lead_I_amplitude": "",
                                "is_lead_II": "",
                                "lead_II_waveforms": "",
                                "lead_II_amplitude": "",
                                "is_lead_III": "",
                                "lead_III_waveforms": "",
                                "lead_III_amplitude": "",
                                "is_lead_aVR": "",
                                "lead_aVR_waveforms": "",
                                "lead_aVR_amplitude": "",
                                "is_lead_aVL": "",
                                "lead_aVL_waveforms": "",
                                "lead_aVL_amplitude": "",
                                "is_lead_aVF": "",
                                "lead_aVF_waveforms": "",
                                "lead_aVF_amplitude": "",
                                "is_lead_V1": "",
                                "lead_V1_waveforms": "",
                                "lead_V1_amplitude": "",
                                "is_lead_V2": "",
                                "lead_V2_waveforms": "",
                                "lead_V2_amplitude": "",
                                "is_lead_V3": "",
                                "lead_V3_waveforms": "",
                                "lead_V3_amplitude": "",
                                "is_lead_V4": "",
                                "lead_V4_waveforms": "",
                                "lead_V4_amplitude": "",
                                "is_lead_V5": "",
                                "lead_V5_waveforms": "",
                                "lead_V5_amplitude": "",
                                "is_lead_V6": "",
                                "lead_V6_waveforms": "",
                                "lead_V6_amplitude": "",
                                "is_lead_V7": "",
                                "lead_V7_waveforms": "",
                                "lead_V7_amplitude": "",
                                "is_lead_V8": "",
                                "lead_V8_waveforms": "",
                                "lead_V8_amplitude": "",
                                "is_lead_V9": "",
                                "lead_V9_waveforms": "",
                                "lead_V9_amplitude": ""
                            }
                        },
                        "result": "",
                        "findings": ""
                    },
                    "holter_ecg": {
                        "total_heartbeats": "",
                        "average_heart_rate": "",
                        "maximal_heart_rate": "",
                        "maximal_heart_rate_occurrence_time": "",
                        "minimal_heart_rate": "",
                        "minimal_heart_rate_occurrence_time": "",
                        "arrhythmia": {
                            "is_arrhythmia": "",
                            "frequentness": "",
                            "total_abnormal_heartbeats": "",
                            "arrhythmia_types": []
                        },
                        "pathological_q_wave": {
                            "is_pathological_q_wave": "",
                            "frequentness": "",
                            "q_wave_leads_detail": []
                        },
                        "st_segment_change": {
                            "is_st_segment_change": "",
                            "st_segment_changes": [{
                                "is_st_segment_depression": "",
                                "frequentness": "",
                                "changes_detail": [{
                                    "duration": "",
                                    "is_lead_I": "",
                                    "lead_I_amplitude": "",
                                    "is_lead_II": "",
                                    "lead_II_amplitude": "",
                                    "is_lead_III": "",
                                    "lead_III_amplitude": "",
                                    "is_lead_aVR": "",
                                    "lead_aVR_amplitude": "",
                                    "is_lead_aVL": "",
                                    "lead_aVL_amplitude": "",
                                    "is_lead_aVF": "",
                                    "lead_aVF_amplitude": "",
                                    "is_lead_V1": "",
                                    "lead_V1_amplitude": "",
                                    "is_lead_V2": "",
                                    "lead_V2_amplitude": "",
                                    "is_lead_V3": "",
                                    "lead_V3_amplitude": "",
                                    "is_lead_V4": "",
                                    "lead_V4_amplitude": "",
                                    "is_lead_V5": "",
                                    "lead_V5_amplitude": "",
                                    "is_lead_V6": "",
                                    "lead_V6_amplitude": "",
                                    "is_lead_V7": "",
                                    "lead_V7_amplitude": "",
                                    "is_lead_V8": "",
                                    "lead_V8_amplitude": "",
                                    "is_lead_V9": "",
                                    "lead_V9_amplitude": ""
                                }]
                            },{
                                "is_st_segment_elevation": "",
                                "frequentness": "",
                                "changes_detail": [{
                                    "duration": "",
                                    "is_lead_I": "",
                                    "lead_I_amplitude": "",
                                    "is_lead_II": "",
                                    "lead_II_amplitude": "",
                                    "is_lead_III": "",
                                    "lead_III_amplitude": "",
                                    "is_lead_aVR": "",
                                    "lead_aVR_amplitude": "",
                                    "is_lead_aVL": "",
                                    "lead_aVL_amplitude": "",
                                    "is_lead_aVF": "",
                                    "lead_aVF_amplitude": "",
                                    "is_lead_V1": "",
                                    "lead_V1_amplitude": "",
                                    "is_lead_V2": "",
                                    "lead_V2_amplitude": "",
                                    "is_lead_V3": "",
                                    "lead_V3_amplitude": "",
                                    "is_lead_V4": "",
                                    "lead_V4_amplitude": "",
                                    "is_lead_V5": "",
                                    "lead_V5_amplitude": "",
                                    "is_lead_V6": "",
                                    "lead_V6_amplitude": "",
                                    "is_lead_V7": "",
                                    "lead_V7_amplitude": "",
                                    "is_lead_V8": "",
                                    "lead_V8_amplitude": "",
                                    "is_lead_V9": "",
                                    "lead_V9_amplitude": ""
                                }]
                            }]
                        },
                        "t_wave_change": {
                            "is_t_wave_change": "",
                            "frequentness": "",
                            "changes_detail": [{
                                "duration": "",
                                "is_lead_I": "",
                                "lead_I_waveforms": "",
                                "lead_I_amplitude": "",
                                "is_lead_II": "",
                                "lead_II_waveforms": "",
                                "lead_II_amplitude": "",
                                "is_lead_III": "",
                                "lead_III_waveforms": "",
                                "lead_III_amplitude": "",
                                "is_lead_aVR": "",
                                "lead_aVR_waveforms": "",
                                "lead_aVR_amplitude": "",
                                "is_lead_aVL": "",
                                "lead_aVL_waveforms": "",
                                "lead_aVL_amplitude": "",
                                "is_lead_aVF": "",
                                "lead_aVF_waveforms": "",
                                "lead_aVF_amplitude": "",
                                "is_lead_V1": "",
                                "lead_V1_waveforms": "",
                                "lead_V1_amplitude": "",
                                "is_lead_V2": "",
                                "lead_V2_waveforms": "",
                                "lead_V2_amplitude": "",
                                "is_lead_V3": "",
                                "lead_V3_waveforms": "",
                                "lead_V3_amplitude": "",
                                "is_lead_V4": "",
                                "lead_V4_waveforms": "",
                                "lead_V4_amplitude": "",
                                "is_lead_V5": "",
                                "lead_V5_waveforms": "",
                                "lead_V5_amplitude": "",
                                "is_lead_V6": "",
                                "lead_V6_waveforms": "",
                                "lead_V6_amplitude": "",
                                "is_lead_V7": "",
                                "lead_V7_waveforms": "",
                                "lead_V7_amplitude": "",
                                "is_lead_V8": "",
                                "lead_V8_waveforms": "",
                                "lead_V8_amplitude": "",
                                "is_lead_V9": "",
                                "lead_V9_waveforms": "",
                                "lead_V9_amplitude": ""
                            }]
                        },
                        "findings": ""
                    },
                    "ucg": {
                        "LVD": "",
                        "EDV": "",
                        "LVS": "",
                        "ESV": "",
                        "LAD": "",
                        "LVPW": "",
                        "IVST": "",
                        "is_LVEF_lt_forty_percent": "",
                        "EF": "",
                        "ratio_E_to_A": "",
                        "is_local_motion_abnormality": "",
                        "local_motion_abnormality_parts": "",
                        "is_vntricular_aneurysm": "",
                        "vntricular_aneurysm_parts": "",
                        "is_left_ventricular_thrombosis": "",
                        "left_ventricular_thrombosis_parts": "",
                        "findings": ""
                    },
                    "pci": {
                        "num": "",
                        "date": "",
                        "type": "",
                        "thrombolysis_interval": "",
                        "onset_interval": {
                            "day": "",
                            "hour": ""
                        },
                        "stay_time": {
                            "prehospital": "",
                            "emergency_call": "",
                            "CCU": "",
                            "conduit_room": ""
                        },
                        "contrast_media": "",
                        "contrast_media_others": "",
                        "coronary_distribution_type": "",
                        "is_coronary_malformations": "",
                        "is_grade_3_lesions": "",
                        "is_blood_flow_TIMI_grade_0to2": "",
                        "is_CTO": "",
                        "is_collateral_circulation": "",
                        "pci_paths": "",
                        "implanted_bracket_count": {
                            "LAD": "",
                            "LCX": "",
                            "RCA": "",
                            "LM": ""
                        },
                        "segmental_lesions": []
                    }
                },
                "admission_diagnosis": {
                    "is_acute_myocardial_infarction": "",
                    "acute_myocardial_infarction_part": "",
                    "is_subacute_myocardial_infarction": "",
                    "subacute_myocardial_infarction_part": "",
                    "is_old_myocardial_infarction": "",
                    "old_myocardial_infarction_part": "",
                    "is_unstable_angina_pectoris": "",
                    "is_effort_angina": "",
                    "effort_angina_pectoris_ccs": "",
                    "is_silent_myocardial_ischemia": "",
                    "is_ischemic_cardiomyopathy": "",
                    "is_sudden_coronary_death": "",
                    "is_chest_pain_of_unknown_origin": "",
                    "is_diagnosis_others": "",
                    "diagnosis_others": ""
                },
                "discharge_diagnosis": {
                    "is_acute_myocardial_infarction": "",
                    "acute_myocardial_infarction_part": "",
                    "is_subacute_myocardial_infarction": "",
                    "subacute_myocardial_infarction_part": "",
                    "is_old_myocardial_infarction": "",
                    "old_myocardial_infarction_part": "",
                    "is_unstable_angina_pectoris": "",
                    "is_effort_angina": "",
                    "effort_angina_pectoris_ccs": "",
                    "is_silent_myocardial_ischemia": "",
                    "is_ischemic_cardiomyopathy": "",
                    "is_sudden_coronary_death": "",
                    "is_chest_pain_of_unknown_origin": "",
                    "is_diagnosis_others": "",
                    "diagnosis_others": ""
                }
            }
            `),
            //病历现病史部分
            //疾病
            care_causes_diseases: {
                //胸痛
                chest_pain: {
                    times_per_day: "",
                    times_per_week: "",
                    times_per_month: "",
                    times_per_year: "",
                    onset_time: "",
                    onset_time_others: "",
                    disease_body_parts: [],
                    relieving_factors: "",
                    relieving_factors_others: "",
                    precipitating_factors: "",
                    precipitating_factors_others: "",
                    radiation_sites: "",
                    radiation_sites_others: "",
                    simultaneous_phenomena: "",
                    simultaneous_phenomenon_others: ""
                },
                //胸闷
                chest_distress: {
                    times_per_day: "",
                    times_per_week: "",
                    times_per_month: "",
                    times_per_year: "",
                    onset_time: "",
                    onset_time_others: "",
                    disease_body_parts: [],
                    relieving_factors: "",
                    relieving_factors_others: "",
                    precipitating_factors: "",
                    precipitating_factors_others: "",
                    radiation_sites: "",
                    radiation_sites_others: "",
                    simultaneous_phenomena: "",
                    simultaneous_phenomenon_others: ""
                },
                //呼吸困难
                dyspnea: {
                    times_per_day: "",
                    times_per_week: "",
                    times_per_month: "",
                    times_per_year: "",
                    onset_time: "",
                    onset_time_others: ""
                },
                //心悸
                palpitation: {
                    times_per_day: "",
                    times_per_week: "",
                    times_per_month: "",
                    times_per_year: "",
                    onset_time: "",
                    onset_time_others: ""
                },
                //心电图异常
                abnormal_ecg: {
                    times_per_day: "",
                    times_per_week: "",
                    times_per_month: "",
                    times_per_year: "",
                    onset_time: "",
                    onset_time_others: ""
                },
                //发病部位
                // disease_body_part: {
                //     body_part_name: "",
                //     body_part_name_others: "",
                //     quality_of_pain: "",
                //     quality_of_pain_others: "",
                //     duration_of_pain: "",
                //     duration_of_pain_others: "",
                //     pain_degree: ""
                // }
            },
            family_history: {
                is_premature_chd: "",
                is_myocardial_infarction: "",
                is_ischemic_stroke: "",
                is_hemorrhagic_stroke: "",
                is_sudden_death: ""
            },
            ecg_arrhythmia_type: {
                arrhythmia_types: "",
                arrhythmia_type_others: ""
            }
        }
    });

    FormWizard.init();
    FormiCheck.init();
    DateTimePickers.init();
    DataLocation.init();
    FormRepeater.init();
});