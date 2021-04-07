module.exports = {
  types: [
    {
      value: "feat",
      name: "feat: 新功能(feature)"
    },
    {
      value: "fix",
      name: "fix: 修复 bug"
    },
    {
      value: "perf",
      name: "perf: 优化相关，比如提升性能、体验"
    },
    {
      value: "refactor",
      name: "refactor: 重构(即不是新增功能，也不是修改 bug 的代码变动)"
    },
    {
      value: "release",
      name: "release: 发布"
    },
    {
      value: "docs",
      name: "docs: 修改文档"
    },
    {
      value: "chore",
      name: "chore: 构建过程或辅助工具的变动"
    },
    {
      value: "style",
      name: "style: 格式(不影响代码运行的变动)"
    },
    {
      value: "revert",
      name: "revert: 回滚代码"
    },
    // {
    //   value: "test",
    //   name: "test: 增删测试"
    // },
  ],
  scopes: [
    { name: '模块01' },
    { name: '模块02' },
    { name: '模块03' },
    { name: '模块04' },
    { name: '模块05' }
  ],

  messages: {
    type: '选择一种你的提交类型:',
    scope: '选择一个scope (可选):',
    customScope: '填写变更范围:',
    subject: '简要说明:\n',
    body: '详细说明，使用"|"换行(可选)：\n',
    breaking: '非兼容性说明 (可选):\n',
    footer: '关联关闭的issue，例如：#31, #34(可选):\n',
    confirmCommit: '确定提交?'
  },

  allowBreakingChanges: ['feat', 'fix', 'perf'],
  allowCustomScopes: true,
  subjectLimit: 100
};