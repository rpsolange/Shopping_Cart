<template>
	<div>
		<div class="radial-gradient">
			<b-row>
				<b-col cols="6" offset="3">
					<form>
						<h1>Bienvenido!</h1>
						<inputComponent :type="'email'" :textPlaceholder="'Email'" v-model="nameModel">
						</inputComponent>
						<inputComponent :type="'password'" :textPlaceholder="'Contraseña'" v-model="passwordModel">
						</inputComponent>
						<buttonComponent :eventButton="authenticationEvent">
							<span> {{buttonText}} </span>
						</buttonComponent>
					</form>
				</b-col>
			</b-row>
		</div>
	</div>
</template>

<script>
import buttonComponent from '@/components/buttonComponent'
import inputComponent from '@/components/inputsComponent'

export default {
	data(){
		return {
			buttonText: 'INGRESAR',
			nameModel: '',
			passwordModel: '',
		}
	},
	components:{
		buttonComponent,
		inputComponent,
	},
	methods: {
		openAlert (append = false) {
			this.$bvToast.toast(`Tu correo o contraseña no es valido`, {
				title: 'Error!',
				autoHideDelay: 5000,
				appendToast: append
			})
		},
		authenticationEvent (){
			let userData = {
				mail: this.nameModel,
				pass: this.passwordModel
			}
			this.$store.dispatch("authenticate", userData);
			if(this.$store.state.authenticate == true){
				this.$router.replace({ name: 'holi' })
			} else {
				this.openAlert()
			}
		},
	}
}
</script>


<style>
  .radial-gradient {
    position:fixed;
    top:0px;
    left:0px;
    height:100%;
    width:100%;

    /*Fallback if gradeints don't work */
    background: #9b59b6;
    /*Linear gradient... */
    background:
        radial-gradient(
        at center, #185a86, #9b59b6
        );
	}

	body {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		font-family: 'Ubuntu', sans-serif;
	}

	form {
		background-color: #FFFFFF;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		padding: 0 50px;
		height: 100%;
		text-align: center;
	}

</style>
