<template>
    <div>
        <div class="us">
            <img width="50" height="50" src="../assets/images/doubi.png">
        </div>
        <div class="content">
            这是{{page}}页面 
        </div>
    </div>
</template>
<style>
    .us {
        color: green
    }
</style>
<style lang="stylus">
    $color = gray;
    .us
        color: $color
</style>
<script type="text/javascript">
    // require('../css/about.css')
    require('../css/us.styl')
    module.exports = {
        data () {
            return {
                page: 'us'
            }
        }
    }
</script>