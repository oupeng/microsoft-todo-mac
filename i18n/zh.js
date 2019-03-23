export default {
  base: {
    async: '同步',
    cancel: '取消',
    completed: '已完成',
    create: '新建',
    delete: '删除',
    due: '截止',
    edit: '编辑',
    empty: '空',
    failed: '失败',
    folder: '清单',
    hide: '隐藏',
    importance: '重要',
    language: '语言',
    loading: '加载中',
    logout: '注销',
    me: '我',
    name: '名称',
    note: '备注',
    planned: '已排期',
    remind: '提醒',
    rename: '重命名',
    repeat: '重复',
    select: '选择',
    setting: '设置',
    show: '显示',
    sort: '排序',
    submit: '确认',
    successfully: '成功',
    task: '任务',
    time: '时间',
    update: '更新'
  },
  date: {
    custom: '自定义',
    daily: '每日',
    day: '天',
    firday: '周五',
    monday: '周一',
    month: '月',
    monthly: '每月',
    saturday: '周六',
    sunday: '周日',
    thurday: '周四',
    tuesday: '周二',
    wednesday: '周三',
    week: '周',
    weekDays: '工作日',
    weekly: '每周',
    year: '年',
    yearly: '每年'
  },
  folder: {
    create: '@:base.create@:base.folder',
    createFolder: '{0}@:base.folder',
    empty: '@:base.empty@:base.folder',
    name: '@:base.folder@:base.name'
  },
  message: {
    commonFailed: '{0}@:base.failed',
    commonSuccessfully: '{0}@:base.successfully',
    createFailed: '@:base.create@:base.failed',
    createSuccessfully: '@:base.create@:base.successfully',
    deleteFailed: '@:base.delete@:base.failed',
    deleteSuccessfully: '@:base.delete@:base.successfully',
    enterToSubmit: '按 Enter 键以进行提交',
    updateFailed: '@:base.update@:base.failed',
    updateSuccessfully: '@:base.update@:base.successfully'
  },
  task: {
    create: '@:base.create@:base.task',
    delete: '@:base.delete@:base.task',
    dueTime: '@:base.due@:base.time',
    name: '@:base.task@:base.name',
    remindTime: '@:base.remind@:base.time',
    showCompleted: '@:base.show@:base.completed',
    showImportance: '@:base.show@:base.importance',
    showPlanned: '@:base.show@:base.planned'
  }
}
