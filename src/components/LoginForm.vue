<template>
  <v-app>
    <v-container
      class="fill-height"
      fluid
    >
      <v-row
        align="start"
        justify="center"
      >
        <v-col
          sm="8"
          md="4"
        >
          <v-card class="elevation-24">
            <v-toolbar
              class="toolbar"
              dark
              flat
            >
              <v-toolbar-title>Iniciar sesión</v-toolbar-title>
              <v-spacer />
            </v-toolbar>
            <v-card-text>
              <v-form
                ref="form"
                lazy-validation
              >
                <v-text-field
                  v-model="form.email"
                  label="Email"
                  name="email"
                  :append-icon="'mdi-account'"
                  :rules="rules.emailRules"
                  type="text"
                />
                <v-text-field
                  v-model="form.password"
                  label="Contraseña"
                  name="password"
                  :rules="[rules.required, rules.maxPassword]"
                  append-icon="mdi-eye"
                />
                <!--<v-alert>
                  Email o contraseña incorrectos
                </v-alert>-->
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer />
              <v-btn class="btn" @click="login">
                Ingresar
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: 'LoginForm',
  data: () => {
    return {
      form: {},
      rules: {
        required: v => !!v || 'Este campo es requerido',
        maxPassword: v => v ? v && v.length <= 25 || 'Se ha superado el máximo permitido' : '',
        emailRules: [
          v => !!v || 'Email es requerido',
          v => /.+@.+\..+/.test(v) || 'Email incorrecto'
        ]
      },
    }
  },
  computed: {
    isAuthenticated() {
      return this.$store.getters[`isAuthenticated`];
    }
  },
  mounted () {
  },
  methods: {
    async login() {
      if (this.$refs.form.validate()) {
        await this.$store.dispatch('login', this.form);
        console.log(this.isAuthenticated);

      }
    }
  }
}
</script>

<style scoped lang="scss">
  .toolbar {
    background-color: #F8BBD0 !important;
  }
  .btn {
    color: #FFF;
    background-color: #F8BBD0 !important;
    border-radius: 10px;
    .v-btn__content {
      font-size: 12px;
    }
  }
</style>