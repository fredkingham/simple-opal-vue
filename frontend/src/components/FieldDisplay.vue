<template>
    <div class="row">
        <div class="col-4">
            <b>
                {{ displayName }}
            </b>
        </div>
        <div class="col">
            {{ value }}
        </div>
    </div>
</template>

<script>
export default {
  name: 'FieldDisplay',
  props: [
      "displayName", "value"
  ]
}
</script>