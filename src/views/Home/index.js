import Utils from '../../utils'
import { Swiper, SwiperSlide } from 'swiper/vue'
import SwiperCore, { Pagination, Navigation } from 'swiper/core'

import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/pagination/pagination.min.css'

SwiperCore.use([Navigation])

export default {
  name: 'Home',
  components: {
    Swiper,
    SwiperSlide
  },
  data () {
    return {
      page: 0,
      currentSection: null,
      openedSection: null,
      showInfo: false,
      backgroundImage:
        'https://bienestaruniversitario.medellin.unal.edu.co/images/portadas/IMG_9360.JPG',
      sections: [
        {
          id: 'salud',
          name: 'Salud',
          img: require('../../assets/icono_salud.png'),
          goal:
            'Promueve el mejoramiento permanente de las condiciones físicas, psíquicas, mentales, sociales y ambientales en las que se desarrolla la vida universitaria, mediante programas formativos, preventivos y correctivos que incidan en la calidad de vida y hábitos de vida saludable.',
          location: 'Bloque 50A - Edifico de la salud.',
          contact: null,
          subsections: [
            'Detección y disminución de factores de riesgo',
            'Promoción de la salud y prevención de la enfermedad',
            'Gestión en salud',
            'Apoyo a la atención primaria y de la emergencia'
          ]
        },
        {
          id: 'cultura',
          name: 'Cultura',
          img: require('../../assets/icono_cultura.png'),
          goal:
            'Busca estimular en la comunidad universitaria el desarrollo de aptitudes estétucas y artísticas, en su formación, expresión y divulgación, atendiendo la diversidad cultiral de la misma.',
          location: null,
          contact: null,
          subsections: [
            'El cuentacho',
            'Viernes de ciudad',
            'Mil años de la música',
            'Actividades especiales',
            'Noticias',
            'Talleres artísticos',
            'Audiciones',
            'Picnic concierto UNAL',
            'Expone tu creatividad',
            'Concurso de cuento corto UNAL en la web',
            'Festival de la canción UNAL',
            'Temporadas y eventos clásicos',
            'Intercultura UNAL',
            'Cine de inclusión',
            'Feria de la diversidad',
            'Patrimonio UNAL'
          ]
        },
        {
          id: 'deporte',
          name: 'Actividad física y deporte',
          img: require('../../assets/icono_deporte.png'),
          goal:
            'Busca stimular la práctica de actividades de carácter recreativo, formativo y competitivo, en el marco del desarrollo humano integral de la comunidad universitaria y la implementación y consolidación del deporte universitario en el país en diferentes niveles de rendimiento deportivo; la gestión de los programas de actividad física y deporte, de actividad lúdico deportiva, de acondicionamiento físico e instrucción deportiva, de deporte de competencia y de alto rendimiento; así como la gestión de proyectos estratégicos en actividad física y deporte, conforme a la reglamentación prevista en la Resolución 02 de 2010 del Consejo de Bienestar Universitario.',
          location: 'Tercer piso del Polideportivo.',
          contact: {
            email: 'deportes_med@unal.edu.co',
            phone: '430 96 05'
          },
          subsections: [
            'Ofertamiento de deportes',
            'Torneos internos',
            'Vacaciones recreativas',
            'Bañista libre',
            'Escenarios deportivos',
            'Préstamos de implementos',
            'Alquiler de escenarios y espacios deportivos',
            'Acondicionamiento físico',
            'Cátedra de deporte formativo'
          ]
        },
        {
          id: 'acompañamiento',
          name: 'Acompañamiento integral',
          img: require('../../assets/icono_acompañamiento.png'),
          goal:
            'Busca enfocar las acciones hacia su comunidad y tiene como objetivo acompañarla en su paso por la Universidad; facilitar el conocimiento de sí mismo y de los demás miembros de la comunidad; desarrollar el sentido de pertenencia, el compromiso individual con la Universidad, la construcción de un tejido social incluyente y el fortalecimiento de las relaciones humanas.',
          location: 'Bloque 11A.',
          contact: {
            email: 'apoyoest_med@unal.edu.co',
            phone: '4309000 ext: 49501'
          },
          subsections: [
            'Inducción y Preparación para el Cambio',
            'Acompañamiento en la Vida Universitaria',
            'Gestión de proyectos',
            'Desarrollo del Potencial Humano',
            'Convivencia y Cotidianidad'
          ]
        },
        {
          id: 'socioeconomico',
          name: 'Gestión y fomento socioeconómico',
          img: require('../../assets/icono_socioeconomico.png'),
          goal:
            'Promueve el mejoramiento de las condiciones socioeconómicas, el desarrollo personal y profesional de la comunidad estudiantil, a través de la Gestión económica, la Gestión alimentaria, la Gestión para el alojamiento y las Alianzas estratégicas para el bienestar.',
          location: 'Bloque 44 – Edificio El Ágora',
          contact: {
            email: 'agestionfse_med@unal.edu.co',
            phone: '430 96 06'
          },
          subsections: [
            'Gestión alimentaria',
            'Gestion para el alojamiento',
            'Gestión económica'
          ]
        }
      ]
    }
  },
  methods: {
    getCurrentSection (prop) {
      return this.currentSection ? this.currentSection[prop] : null
    },
    handleSliderChange ({ realIndex }) {
      this.currentSection = this.sections[realIndex]
      const randomNumber = Utils.getRandom(1, 3)
      const category = this.sections[realIndex].id
      this.backgroundImage = require(`../../assets/resources/${category}_${randomNumber}.jpg`)
    },
    handleClickSection (section) {
      this.openedSection = section
    },
    scrollToBottom () {
      const refs = this.$refs.refsBox
      refs.scrollTop = refs.scrollHeight
    },
    debug (e) {
      console.log(e)
    }
  },
  beforeMount () {}
}
