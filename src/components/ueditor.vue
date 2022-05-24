<template>
  <div>
    <vue-ueditor-wrap :config="editorConfig"></vue-ueditor-wrap>
  </div>
</template>

<script>
    import VueUeditorWrap from "vue-ueditor-wrap";
    export default {
        name: "ueditor",
        props:['FrameHeight'],
        components: {
            VueUeditorWrap
        },
        data(){
            return{
                editorConfig:{
                    // 你的UEditor资源存放的路径,相对于打包后的index.html
                    UEDITOR_HOME_URL: "/UEditor/",
                    // 编辑器不自动被内容撑高
                    autoHeightEnabled: false,
                    // 初始容器高度
                    initialFrameHeight: this.FrameHeight,
                    // 初始容器宽度
                    initialFrameWidth: "90%",
                    // 关闭自动保存
                    enableAutoSave: false,
                    // 自定义工具栏，需要额外选项可以参考ueditor.config.js
                    toolbars: [
                        [
                            "fullscreen",
                            "bold",
                            "italic",
                            "underline",
                            "|",
                            "fontsize",
                            "fontfamily",
                            "|",
                            "kityformula",


                            "justifyleft",
                            "justifycenter",
                            "justifyright",
                            "justifyjustify",
                            "|",
                            'insertvideo', //视频
                            'simpleupload', //单图上传
                            'insertimage', //多图上传
                            'attachment', //附件
                            'charts', // 图表
                            'music', //音乐
                        ]
                    ]
                }
            }
        },
    }
</script>

<style scoped>

</style>