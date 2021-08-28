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
                  label="Email"
                  name="email"
                  :append-icon="'mdi-account'"
                  type="text"
                />
                <v-text-field
                  label="Contraseña"
                  name="password"
                  append-icon="mdi-eye"
                />
                <!--<v-alert>
                  Email o contraseña incorrectos
                </v-alert>-->
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer />
              <v-btn class="btn">
                Ingresar
              </v-btn>
              <v-btn class="btn">
                Crear cuenta
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
    }
  },
  computed: {

  },
  mounted () {
  },
  methods: {
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