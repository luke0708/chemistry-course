// 共享常量定义

// 元素类别常量
const ELEMENT_CATEGORIES = {
    'alkali-metal': '碱金属',
    'alkaline-earth': '碱土金属',
    'transition-metal': '过渡金属',
    'basic-metal': '基本金属',
    'semi-metal': '半金属',
    'non-metal': '非金属',
    'halogen': '卤素',
    'noble-gas': '稀有气体'
};

// 电负性数据（鲍林标度）- 前36个元素
const ELECTRONEGATIVITY_DATA = {
    'H': 2.20, 'He': null, 'Li': 0.98, 'Be': 1.57, 'B': 2.04,
    'C': 2.55, 'N': 3.04, 'O': 3.44, 'F': 3.98, 'Ne': null,
    'Na': 0.93, 'Mg': 1.31, 'Al': 1.61, 'Si': 1.90, 'P': 2.19,
    'S': 2.58, 'Cl': 3.16, 'Ar': null, 'K': 0.82, 'Ca': 1.00,
    'Sc': 1.36, 'Ti': 1.54, 'V': 1.63, 'Cr': 1.66, 'Mn': 1.55,
    'Fe': 1.83, 'Co': 1.88, 'Ni': 1.91, 'Cu': 1.90, 'Zn': 1.65,
    'Ga': 1.81, 'Ge': 2.01, 'As': 2.18, 'Se': 2.55, 'Br': 2.96, 'Kr': null
};

// 化学键键能数据 (kJ/mol)
const BOND_ENERGIES = {
    'H-H': 436,
    'O=O': 498,
    'N≡N': 945,
    'C-C': 347,
    'C=O': 799,
    'Na-Cl': 787
};

// 分子极性数据
const MOLECULE_POLARITY = {
    'h2o': { name: '水 (H₂O)', polar: true, reason: 'V形结构，正负电荷中心不重合' },
    'co2': { name: '二氧化碳 (CO₂)', polar: false, reason: '直线形结构，正负电荷中心重合' },
    'nh3': { name: '氨 (NH₃)', polar: true, reason: '三角锥形结构，正负电荷中心不重合' },
    'ch4': { name: '甲烷 (CH₄)', polar: false, reason: '四面体结构，正负电荷中心重合' },
    'hcl': { name: '氯化氢 (HCl)', polar: true, reason: '直线形但电负性差异大，正负电荷中心不重合' }
};

// 分子几何构型数据
const MOLECULAR_GEOMETRIES = {
    'linear': { name: '直线形', angle: 180, example: 'CO₂' },
    'bent': { name: 'V形', angle: 104.5, example: 'H₂O' },
    'trigonal': { name: '三角锥形', angle: 107, example: 'NH₃' },
    'tetrahedral': { name: '四面体形', angle: 109.5, example: 'CH₄' }
};

// 化学键类型
const BOND_TYPES = {
    'ionic': '离子键',
    'covalent': '共价键',
    'metallic': '金属键'
};

// 分子间作用力类型
const INTERMOLECULAR_FORCES = {
    'vdw': '范德华力',
    'hydrogen': '氢键',
    'dipole': '偶极-偶极作用'
};

// 测验题目
const QUIZ_QUESTIONS = [
    {
        question: "NaCl（氯化钠）中的化学键类型是？",
        options: ["离子键", "共价键", "金属键", "氢键"],
        answer: 0
    },
    {
        question: "H₂O（水）分子中的化学键类型是？",
        options: ["离子键", "共价键", "金属键", "范德华力"],
        answer: 1
    },
    {
        question: "铜金属中的化学键类型是？",
        options: ["离子键", "共价键", "金属键", "氢键"],
        answer: 2
    },
    {
        question: "下列哪种物质中存在氢键？",
        options: ["NaCl", "H₂O", "CH₄", "CO₂"],
        answer: 1
    },
    {
        question: "CO₂（二氧化碳）分子的几何构型是？",
        options: ["直线形", "V形", "三角锥形", "四面体形"],
        answer: 0
    }
];

// 应用案例数据
const APPLICATION_CASES = {
    'salt': {
        name: '食盐晶体结构',
        description: '食盐晶体中，Na⁺和Cl⁻通过离子键形成规则的立方晶格结构，赋予食盐高熔点、易溶于水的特性。'
    },
    'plastic': {
        name: '聚乙烯分子链',
        description: '聚乙烯中的碳碳共价键形成长链分子，这些分子通过范德华力相互缠绕，赋予塑料柔韧性和耐用性。'
    },
    'copper': {
        name: '铜金属晶格',
        description: '铜金属中，Cu²⁺离子沉浸在电子海中，金属键使电子可以自由移动，赋予铜优良的导电性和延展性。'
    },
    'dna': {
        name: 'DNA氢键结构',
        description: 'DNA双螺旋结构中，碱基对（A-T、G-C）通过氢键连接，维持了遗传信息的稳定性和特异性。'
    }
};

// 电子层容量
const SHELL_CAPACITY = [2, 8, 18, 32];
const SHELL_NAMES = ['K', 'L', 'M', 'N'];

// 颜色主题
const COLORS = {
    primary: '#667eea',
    secondary: '#764ba2',
    success: '#4caf50',
    warning: '#ff9800',
    error: '#f44336',
    info: '#2196f3',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
};

// 响应式断点
const BREAKPOINTS = {
    mobile: 768,
    tablet: 1024,
    desktop: 1200
};

// 动画持续时间
const ANIMATION_DURATIONS = {
    short: 300,
    medium: 500,
    long: 1000
};

// 导出常量
window.Constants = {
    ELEMENT_CATEGORIES,
    ELECTRONEGATIVITY_DATA,
    BOND_ENERGIES,
    MOLECULE_POLARITY,
    MOLECULAR_GEOMETRIES,
    BOND_TYPES,
    INTERMOLECULAR_FORCES,
    QUIZ_QUESTIONS,
    APPLICATION_CASES,
    SHELL_CAPACITY,
    SHELL_NAMES,
    COLORS,
    BREAKPOINTS,
    ANIMATION_DURATIONS
};
