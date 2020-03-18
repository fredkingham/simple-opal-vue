<template>
    <div class="modal-content">
      <div class="modal-header">
        <slot name="header">
            <h5 class="modal-title">Modal title</h5>
        </slot>
      </div>
      <div class="modal-body">
        <div class="container-fluid">
            <slot name="body">
                <p>Modal body text goes here.</p>
            </slot>
        </div>
      </div>
      <div class="modal-footer">
        <slot name="footer">
            <button type="button" class="btn btn-primary">Save changes</button>
            <button type="button" class="btn btn-secondary">Close</button>
        </slot>
      </div>
    </div>
</template>

<script>
export default{
    name: "ModalBase"
}
</script>