<template>
    <div>
        <div class="about">
            <img src="../assets/images/doubi.png">
        </div>
        <div class="content">
            这是{{page}}页面 
        </div>
    </div>
</template>
<style>
    .about {
        color: green
    }
</style>
<style lang="stylus">
    $color = gray;
    .about
        color: $color
</style>
<script type="text/javascript">
    // require('../css/about.css')
    require('../css/about.styl')
    module.exports = {
        data () {
            return {
                page: 'about'
            }
        }
    }
</script>