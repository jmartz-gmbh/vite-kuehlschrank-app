<template>
<div class="vp-home">
    Homepage
</div>
</template>

<script>
export default{
    name: "Hompage",
    mounted() {
        if(this.$store.state.auth.token == '' || this.$store.state.auth.token == null){
            this.$router.push('/settings');
        }
        else {
            this.$router.push('/dashboard');
        }
    },
}
</script>