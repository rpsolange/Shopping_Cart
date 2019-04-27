<template>
	<div>
		<button class="btnAction" @click="eventButton" :disabled="disabledButton">
			<slot></slot>
		</button>
	</div>
</template>

<script>
export default {
	name: 'buttonComponent',
	props: {
		eventButton: {
			type: Function
		},
		disabledButton: {
			type: Boolean,
			required: false
		}
	}
}
</script>


<style>
	.btnAction {
		text-transform: uppercase;
		border-radius: 20px;
		border: 1px solid #FF4B2B;
		background-color: #FF4B2B;
		color: #FFFFFF;
		font-size: 12px;
		font-weight: bold;
		padding: 12px 45px;
		letter-spacing: 1px;
		outline: none;
		text-transform: uppercase;
		transition: transform 80ms ease-in;
		margin: 10px;
	}

	.btnAction:active {
		transform: scale(0.95);
	}

</style>


