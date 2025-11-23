// 元素数据 - 前36个元素（H到Kr）
const elementsData = {
    'H': { name: '氢', protons: 1, neutrons: 0, electrons: 1, config: '1s¹', category: 'non-metal', atomicMass: 1.008 },
    'He': { name: '氦', protons: 2, neutrons: 2, electrons: 2, config: '1s²', category: 'noble-gas', atomicMass: 4.003 },
    'Li': { name: '锂', protons: 3, neutrons: 4, electrons: 3, config: '1s² 2s¹', category: 'alkali-metal', atomicMass: 6.941 },
    'Be': { name: '铍', protons: 4, neutrons: 5, electrons: 4, config: '1s² 2s²', category: 'alkaline-earth', atomicMass: 9.012 },
    'B': { name: '硼', protons: 5, neutrons: 6, electrons: 5, config: '1s² 2s² 2p¹', category: 'semi-metal', atomicMass: 10.81 },
    'C': { name: '碳', protons: 6, neutrons: 6, electrons: 6, config: '1s² 2s² 2p²', category: 'non-metal', atomicMass: 12.01 },
    'N': { name: '氮', protons: 7, neutrons: 7, electrons: 7, config: '1s² 2s² 2p³', category: 'non-metal', atomicMass: 14.01 },
    'O': { name: '氧', protons: 8, neutrons: 8, electrons: 8, config: '1s² 2s² 2p⁴', category: 'non-metal', atomicMass: 16.00 },
    'F': { name: '氟', protons: 9, neutrons: 10, electrons: 9, config: '1s² 2s² 2p⁵', category: 'halogen', atomicMass: 19.00 },
    'Ne': { name: '氖', protons: 10, neutrons: 10, electrons: 10, config: '1s² 2s² 2p⁶', category: 'noble-gas', atomicMass: 20.18 },
    'Na': { name: '钠', protons: 11, neutrons: 12, electrons: 11, config: '1s² 2s² 2p⁶ 3s¹', category: 'alkali-metal', atomicMass: 22.99 },
    'Mg': { name: '镁', protons: 12, neutrons: 12, electrons: 12, config: '1s² 2s² 2p⁶ 3s²', category: 'alkaline-earth', atomicMass: 24.31 },
    'Al': { name: '铝', protons: 13, neutrons: 14, electrons: 13, config: '1s² 2s² 2p⁶ 3s² 3p¹', category: 'basic-metal', atomicMass: 26.98 },
    'Si': { name: '硅', protons: 14, neutrons: 14, electrons: 14, config: '1s² 2s² 2p⁶ 3s² 3p²', category: 'semi-metal', atomicMass: 28.09 },
    'P': { name: '磷', protons: 15, neutrons: 16, electrons: 15, config: '1s² 2s² 2p⁶ 3s² 3p³', category: 'non-metal', atomicMass: 30.97 },
    'S': { name: '硫', protons: 16, neutrons: 16, electrons: 16, config: '1s² 2s² 2p⁶ 3s² 3p⁴', category: 'non-metal', atomicMass: 32.07 },
    'Cl': { name: '氯', protons: 17, neutrons: 18, electrons: 17, config: '1s² 2s² 2p⁶ 3s² 3p⁵', category: 'halogen', atomicMass: 35.45 },
    'Ar': { name: '氩', protons: 18, neutrons: 22, electrons: 18, config: '1s² 2s² 2p⁶ 3s² 3p⁶', category: 'noble-gas', atomicMass: 39.95 },
    'K': { name: '钾', protons: 19, neutrons: 20, electrons: 19, config: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s¹', category: 'alkali-metal', atomicMass: 39.10 },
    'Ca': { name: '钙', protons: 20, neutrons: 20, electrons: 20, config: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s²', category: 'alkaline-earth', atomicMass: 40.08 },
    'Sc': { name: '钪', protons: 21, neutrons: 24, electrons: 21, config: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹ 4s²', category: 'transition-metal', atomicMass: 44.96 },
    'Ti': { name: '钛', protons: 22, neutrons: 26, electrons: 22, config: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d² 4s²', category: 'transition-metal', atomicMass: 47.87 },
    'V': { name: '钒', protons: 23, neutrons: 28, electrons: 23, config: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d³ 4s²', category: 'transition-metal', atomicMass: 50.94 },
    'Cr': { name: '铬', protons: 24, neutrons: 28, electrons: 24, config: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁵ 4s¹', category: 'transition-metal', atomicMass: 52.00 },
    'Mn': { name: '锰', protons: 25, neutrons: 30, electrons: 25, config: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁵ 4s²', category: 'transition-metal', atomicMass: 54.94 },
    'Fe': { name: '铁', protons: 26, neutrons: 30, electrons: 26, config: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁶ 4s²', category: 'transition-metal', atomicMass: 55.85 },
    'Co': { name: '钴', protons: 27, neutrons: 32, electrons: 27, config: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁷ 4s²', category: 'transition-metal', atomicMass: 58.93 },
    'Ni': { name: '镍', protons: 28, neutrons: 31, electrons: 28, config: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁸ 4s²', category: 'transition-metal', atomicMass: 58.69 },
    'Cu': { name: '铜', protons: 29, neutrons: 35, electrons: 29, config: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s¹', category: 'transition-metal', atomicMass: 63.55 },
    'Zn': { name: '锌', protons: 30, neutrons: 35, electrons: 30, config: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s²', category: 'transition-metal', atomicMass: 65.38 },
    'Ga': { name: '镓', protons: 31, neutrons: 39, electrons: 31, config: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p¹', category: 'basic-metal', atomicMass: 69.72 },
    'Ge': { name: '锗', protons: 32, neutrons: 41, electrons: 32, config: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p²', category: 'semi-metal', atomicMass: 72.63 },
    'As': { name: '砷', protons: 33, neutrons: 42, electrons: 33, config: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p³', category: 'semi-metal', atomicMass: 74.92 },
    'Se': { name: '硒', protons: 34, neutrons: 45, electrons: 34, config: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁴', category: 'non-metal', atomicMass: 78.96 },
    'Br': { name: '溴', protons: 35, neutrons: 45, electrons: 35, config: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁵', category: 'halogen', atomicMass: 79.90 },
    'Kr': { name: '氪', protons: 36, neutrons: 48, electrons: 36, config: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶', category: 'noble-gas', atomicMass: 83.80 }
};

// 更新原子模型
function updateAtomModel(elementSymbol) {
    const element = elementsData[elementSymbol];
    const atomModel = document.getElementById('atom-model');
    const atomInfo = document.getElementById('atom-info');

    if (!element) return;

    // 更新原子模型可视化
    atomModel.innerHTML = generateAtomVisualization(element);
    atomInfo.innerHTML = generateElementInfo(element);
}

// 生成原子可视化
function generateAtomVisualization(element) {
    const { protons, neutrons, electrons, name } = element;

    return `
        <div class="atom-visualization">
            <div class="nucleus">
                <div class="proton">p⁺</div>
                <div class="neutron">n⁰</div>
                <div class="nucleus-label">原子核 (${protons}p⁺ + ${neutrons}n⁰)</div>
            </div>
            ${generateElectronShells(electrons)}
            <div class="element-name">${name}原子</div>
        </div>
    `;
}

// 生成电子层
function generateElectronShells(electronCount) {
    let shells = '';
    let remainingElectrons = electronCount;

    // 简单模拟电子层分布
    const shellCapacity = [2, 8, 18, 32];
    const shellNames = ['K', 'L', 'M', 'N'];

    for (let i = 0; i < shellCapacity.length && remainingElectrons > 0; i++) {
        const electronsInShell = Math.min(shellCapacity[i], remainingElectrons);
        const radius = 40 + i * 60;

        shells += `
            <div class="electron-shell" style="width: ${radius * 2}px; height: ${radius * 2}px;">
                <div class="shell-label">${shellNames[i]}层 (${electronsInShell}e⁻)</div>
                ${generateElectrons(electronsInShell, radius)}
            </div>
        `;

        remainingElectrons -= electronsInShell;
    }

    return shells;
}

// 生成电子
function generateElectrons(count, radius) {
    let electrons = '';
    const angleStep = (2 * Math.PI) / count;

    for (let i = 0; i < count; i++) {
        const angle = i * angleStep;
        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle);

        electrons += `
            <div class="electron" style="transform: translate(${x}px, ${y}px)">e⁻</div>
        `;
    }

    return electrons;
}

// 生成元素信息
function generateElementInfo(element) {
    const { name, protons, neutrons, electrons, config } = element;

    return `
        <h4>${name}元素信息</h4>
        <div class="element-details">
            <p><strong>原子序数：</strong>${protons}</p>
            <p><strong>质量数：</strong>${protons + neutrons}</p>
            <p><strong>电子数：</strong>${electrons}</p>
            <p><strong>电子排布：</strong>${config}</p>
        </div>
    `;
}

// 创建简化周期表
function createSimplePeriodicTable() {
    const preview = document.getElementById('pt-preview');
    const elements = [
        'H', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'He',
        'Li', 'Be', '', '', '', '', '', '', '', '', '', 'B', 'C', 'N', 'O', 'F', 'Ne',
        'Na', 'Mg', '', '', '', '', '', '', '', '', '', 'Al', 'Si', 'P', 'S', 'Cl', 'Ar'
    ];

    let tableHTML = '<div class="simple-periodic-table">';

    elements.forEach((element, index) => {
        if (element) {
            const category = elementsData[element]?.category || 'transition-metal';
            tableHTML += `<div class="pt-element ${category}" title="${element}">${element}</div>`;
        } else {
            tableHTML += '<div class="pt-empty"></div>';
        }
    });

    tableHTML += '</div>';
    preview.innerHTML = tableHTML;
}

// 创建元素性质对比表格
function createComparisonTable() {
    const tableBody = document.getElementById('comparison-table-body');
    
    // 电负性数据（鲍林标度）- 扩展到前36个元素
    const electronegativityData = {
        'H': 2.20, 'He': null, 'Li': 0.98, 'Be': 1.57, 'B': 2.04,
        'C': 2.55, 'N': 3.04, 'O': 3.44, 'F': 3.98, 'Ne': null,
        'Na': 0.93, 'Mg': 1.31, 'Al': 1.61, 'Si': 1.90, 'P': 2.19,
        'S': 2.58, 'Cl': 3.16, 'Ar': null, 'K': 0.82, 'Ca': 1.00,
        'Sc': 1.36, 'Ti': 1.54, 'V': 1.63, 'Cr': 1.66, 'Mn': 1.55,
        'Fe': 1.83, 'Co': 1.88, 'Ni': 1.91, 'Cu': 1.90, 'Zn': 1.65,
        'Ga': 1.81, 'Ge': 2.01, 'As': 2.18, 'Se': 2.55, 'Br': 2.96, 'Kr': null
    };

    // 元素类别中文名称
    const categoryNames = {
        'alkali-metal': '碱金属',
        'alkaline-earth': '碱土金属',
        'transition-metal': '过渡金属',
        'basic-metal': '基本金属',
        'semi-metal': '半金属',
        'non-metal': '非金属',
        'halogen': '卤素',
        'noble-gas': '稀有气体'
    };

    let tableHTML = '';

    // 选择代表性元素进行对比（包含更多元素类型）
    const selectedElements = [
        'H', 'Li', 'C', 'N', 'O', 'F', 'Na', 'Mg', 'Al', 'Si', 
        'P', 'S', 'Cl', 'K', 'Ca', 'Sc', 'Ti', 'Cr', 'Fe', 'Cu', 
        'Zn', 'Ga', 'Ge', 'As', 'Se', 'Br', 'Kr'
    ];

    selectedElements.forEach(symbol => {
        const element = elementsData[symbol];
        if (element) {
            const electronegativity = electronegativityData[symbol];
            const categoryName = categoryNames[element.category] || element.category;
            
            tableHTML += `
                <tr>
                    <td><strong>${symbol}</strong> (${element.name})</td>
                    <td>${element.protons}</td>
                    <td>${element.atomicMass}</td>
                    <td>${element.config}</td>
                    <td>${categoryName}</td>
                    <td>${electronegativity ? electronegativity.toFixed(2) : '-'}</td>
                </tr>
            `;
        }
    });

    tableBody.innerHTML = tableHTML;
}

// 章节切换功能
function showSection(sectionId) {
    // 隐藏所有章节
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // 显示目标章节
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
    }

    // 更新导航激活状态
    updateNavActiveState(sectionId);

    // 滚动到顶部
    window.scrollTo(0, 0);
}

// 更新导航激活状态
function updateNavActiveState(activeSection) {
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href && href.substring(1) === activeSection) {
            link.style.background = '#667eea';
            link.style.color = 'white';
        } else {
            link.style.background = '';
            link.style.color = '';
        }
    });
}

// 初始化页面
document.addEventListener('DOMContentLoaded', function () {
    // 默认显示首页
    showSection('home');

    // 初始化原子模型（默认显示锂）
    updateAtomModel('Li');

    // 创建简化周期表
    createSimplePeriodicTable();

    // 创建元素性质对比表格
    createComparisonTable();

    // 添加键盘导航
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            showSection('home');
        }
    });

    // 添加导航点击事件
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href')?.substring(1);
            if (targetId) {
                showSection(targetId);
            }
        });
    });

    // 添加课程卡片点击事件
    const frameworkCards = document.querySelectorAll('.framework-card');
    frameworkCards.forEach(card => {
        card.addEventListener('click', function () {
            const targetId = this.getAttribute('onclick')?.match(/'(.*?)'/)?.[1];
            if (targetId) {
                showSection(targetId);
            }
        });
    });
});
