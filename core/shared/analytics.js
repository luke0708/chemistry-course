/**
 * 学习统计与档案系统
 * 使用LocalStorage持久化用户学习数据
 */

const Analytics = (function() {
    // 存储键名
    const STORAGE_KEY = 'chemistry_course_analytics';
    
    // 默认数据结构
    const DEFAULT_DATA = {
        userId: null,
        firstVisit: null,
        lastVisit: null,
        totalVisits: 0,
        totalLearningTime: 0, // 总学习秒数
        chapters: {
            'home': { time: 0, visits: 0 },
            'atomic-world': { time: 0, visits: 0 },
            'chemical-bonds': { time: 0, visits: 0 },
            'reactions': { time: 0, visits: 0 },
            'elements': { time: 0, visits: 0 }
        }
    };
    
    // 当前状态
    let data = null;
    let currentChapter = null;
    let chapterStartTime = null;
    let isPageVisible = true;
    let saveTimeout = null;
    
    /**
     * 生成UUID（混合方案）
     * 优先使用crypto.randomUUID()，不支持时使用回退方案
     */
    function generateUUID() {
        // 优先使用标准API
        if (typeof crypto !== 'undefined' && crypto.randomUUID) {
            return crypto.randomUUID();
        }
        
        // 回退方案：时间戳 + 随机数
        const timestamp = Date.now().toString(36);
        const randomStr = Math.random().toString(36).substring(2, 10);
        return `uuid-${timestamp}-${randomStr}`;
    }
    
    /**
     * 从localStorage加载数据
     */
    function loadData() {
        try {
            const stored = localStorage.getItem(STORAGE_KEY);
            if (stored) {
                const parsed = JSON.parse(stored);
                // 合并存储的数据和默认数据，确保数据结构完整
                data = {
                    ...DEFAULT_DATA,
                    ...parsed,
                    chapters: {
                        ...DEFAULT_DATA.chapters,
                        ...(parsed.chapters || {})
                    }
                };
                console.log('Analytics: 已加载现有数据', data);
            } else {
                data = JSON.parse(JSON.stringify(DEFAULT_DATA));
                console.log('Analytics: 创建新数据');
            }
        } catch (error) {
            console.error('Analytics: 加载数据失败，使用默认数据', error);
            data = JSON.parse(JSON.stringify(DEFAULT_DATA));
        }
    }
    
    /**
     * 保存数据到localStorage（防抖处理）
     */
    function saveData() {
        if (!data) return;
        
        // 清除之前的保存定时器
        if (saveTimeout) {
            clearTimeout(saveTimeout);
        }
        
        // 防抖保存，避免频繁写入
        saveTimeout = setTimeout(() => {
            try {
                data.lastVisit = new Date().toISOString();
                localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
                console.log('Analytics: 数据已保存');
            } catch (error) {
                console.error('Analytics: 保存数据失败', error);
            }
        }, 500);
    }
    
    /**
     * 结算当前章节的时间
     */
    function settleCurrentChapter() {
        if (!currentChapter || !chapterStartTime || !data) return;
        
        const endTime = Date.now();
        const timeSpent = Math.floor((endTime - chapterStartTime) / 1000); // 转换为秒
        
        if (timeSpent > 0) {
            // 更新章节时间
            if (!data.chapters[currentChapter]) {
                data.chapters[currentChapter] = { time: 0, visits: 0 };
            }
            data.chapters[currentChapter].time += timeSpent;
            data.totalLearningTime += timeSpent;
            
            console.log(`Analytics: 章节 ${currentChapter} 停留 ${timeSpent} 秒`);
        }
        
        // 重置计时
        chapterStartTime = null;
        currentChapter = null;
    }
    
    /**
     * 开始新章节计时
     * @param {string} chapterId - 章节ID
     */
    function startChapterTimer(chapterId) {
        // 先结算之前的章节
        settleCurrentChapter();
        
        // 开始新章节计时
        currentChapter = chapterId;
        chapterStartTime = Date.now();
        
        // 更新访问次数
        if (data && data.chapters[chapterId]) {
            data.chapters[chapterId].visits += 1;
        } else if (data) {
            data.chapters[chapterId] = { time: 0, visits: 1 };
        }
        
        console.log(`Analytics: 开始计时章节 ${chapterId}`);
    }
    
    /**
     * 处理页面可见性变化
     */
    function handleVisibilityChange() {
        const wasVisible = isPageVisible;
        isPageVisible = !document.hidden;
        
        if (wasVisible && !isPageVisible) {
            // 页面变为不可见，暂停计时
            if (currentChapter && chapterStartTime) {
                settleCurrentChapter();
                console.log('Analytics: 页面隐藏，暂停计时');
            }
        } else if (!wasVisible && isPageVisible) {
            // 页面变为可见，恢复计时
            if (currentChapter) {
                chapterStartTime = Date.now();
                console.log('Analytics: 页面显示，恢复计时');
            }
        }
    }
    
    /**
     * 格式化时间（秒 -> 小时:分钟）
     * @param {number} seconds - 总秒数
     * @returns {string} 格式化后的时间
     */
    function formatTime(seconds) {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        
        if (hours > 0) {
            return `${hours}小时${minutes}分钟`;
        } else {
            return `${minutes}分钟`;
        }
    }
    
    /**
     * 获取格式化统计数据
     * @returns {Object} 格式化后的统计数据
     */
    function getStats() {
        if (!data) return null;
        
        return {
            userId: data.userId,
            firstVisit: data.firstVisit,
            lastVisit: data.lastVisit,
            totalVisits: data.totalVisits,
            totalLearningTime: data.totalLearningTime,
            formattedTotalTime: formatTime(data.totalLearningTime),
            chapters: data.chapters
        };
    }
    
    /**
     * 重置所有统计数据
     */
    function resetData() {
        data = JSON.parse(JSON.stringify(DEFAULT_DATA));
        data.userId = generateUUID();
        data.firstVisit = new Date().toISOString();
        data.totalVisits = 1;
        
        currentChapter = null;
        chapterStartTime = null;
        
        saveData();
        console.log('Analytics: 数据已重置');
        
        return data;
    }
    
    /**
     * 初始化统计系统
     */
    function init() {
        console.log('Analytics: 初始化学习统计系统');
        
        // 加载数据
        loadData();
        
        // 如果是首次访问，初始化数据
        if (!data.userId) {
            data.userId = generateUUID();
            data.firstVisit = new Date().toISOString();
        }
        
        // 更新访问次数
        data.totalVisits += 1;
        data.lastVisit = new Date().toISOString();
        
        // 设置事件监听
        document.addEventListener('visibilitychange', handleVisibilityChange);
        window.addEventListener('beforeunload', () => {
            settleCurrentChapter();
            saveData();
        });
        
        // 初始保存
        saveData();
        
        console.log('Analytics: 初始化完成', data);
        return data;
    }
    
    /**
     * 跟踪页面/章节访问
     * @param {string} chapterId - 章节ID
     */
    function trackPageView(chapterId) {
        if (!data) {
            console.warn('Analytics: 数据未初始化，请先调用init()');
            return;
        }
        
        // 确保章节ID有效
        const validChapters = ['home', 'atomic-world', 'chemical-bonds', 'reactions', 'elements'];
        if (!validChapters.includes(chapterId)) {
            console.warn(`Analytics: 无效的章节ID: ${chapterId}`);
            return;
        }
        
        // 开始新章节计时
        startChapterTimer(chapterId);
        
        // 保存数据
        saveData();
        
        console.log(`Analytics: 跟踪章节访问: ${chapterId}`);
    }
    
    // 公开API
    return {
        init,
        trackPageView,
        getStats,
        resetData,
        saveData,
        
        // 内部方法（仅用于测试）
        _test: {
            generateUUID,
            formatTime,
            settleCurrentChapter
        }
    };
})();

// 全局导出
window.Analytics = Analytics;
