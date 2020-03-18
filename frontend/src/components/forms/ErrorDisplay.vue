<template>
    <div class="row">
        <div class="col-sm-12">
            {{ error }}
        </div>
    </div>
</template>

<script>
export default {
    props: ["error"],
    name: 'ErrorDisplay',
}
</script>