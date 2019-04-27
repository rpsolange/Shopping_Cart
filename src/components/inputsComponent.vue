<template>
	<div>
		<b-form-input class="inputStyle" :type="type" :placeholder="textPlaceholder" v-model="modelInput"></b-form-input>
	</div>
</template>

<script>
export default {
	name: 'inputComponent',
	props: {
		type: {
			type: String
		},
		textPlaceholder: {
			type: String,
		},
		value: {
			type: String,
		}
	},
	computed:{
		modelInput:{
			get () {
				return this.value
			},
			set (val) {
				this.$emit('input', val)
			}
		},
	}
}
</script>


<style>
.inputStyle{
	margin: 10px 0 5px;
}

</style>