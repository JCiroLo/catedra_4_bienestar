<template lang="pug">
.page-view(:style="{backgroundImage: `url('${backgroundImage}'`}" :class="{'custom-image': page == 0}")
  transition(name="fade-down" mode="out-in")
    .greeting(v-if="page === 0")
      .empty
      h1 Bienestar Universitario
      
      .actions  
        button(@click="page = 3") ¡Entrar!
        button(@click="page = 1") Acerca de
      
      .resources
        p 
          | Ilustraciones tomadas de: 
          a(href="http://www.freepik.com") Designed by slidesgo / Freepik
        p
          | Información recuperada de: 
          a(href="https://bienestaruniversitario.medellin.unal.edu.co/") Bienestar Universitario Unalmed
        


    .work-summary(v-else-if="page === 1")
      .bubbles
        .bubble(v-for="b in 10" :key="b")
      .presentation
        h1 Cátedra Antioquia
        p.name Juan Pablo Ciro Londoño
        p.cc 1214747164
        p.work-title Conferencia sobre Bienestar universitario
        h2 Bienestar Universitario 2.0
        p.date 22 de Abril del 2022
        p.grade 
          | Autoevaluación 
          u: b 5.0
      .references
        h2 Referencias (IEEE):
        p 
          | [1] U. Antonio, (2005). Bienestar Universitario : Reglamento, Modelo de Funcionamiento, Mejoramiento Contínuo [Online]. Available: 
          a(href="https://search.ebscohost.com/login.aspx?direct=true&db=cat02704a&AN=unc.000377974&lang=es&site=eds-live") https://search.ebscohost.com/login.aspx?direct=true&db=cat02704a&AN=unc.000377974&lang=es&site=eds-live
        p 
          | [2] B. Hernndez, V Gomez. Estandarizacin de Procedimientos de Las Reas de Gestin y Fomento Socioeconmico y Actividad Fsica y Deporte de Bienestar Universitario [Online]. Available: 
          a(href="https://search.ebscohost.com/login.aspx?direct=true&db=cat02229a&AN=med.000694358&lang=es&site=eds-live") https://search.ebscohost.com/login.aspx?direct=true&db=cat02229a&AN=med.000694358&lang=es&site=eds-live
      .actions
        button.outline(@click="page = 0") 
          i.fas.fa-chevron-left
          | Atrás
        button.outline(@click="page = 2") 
          i.fas.fa-question
          | Cuestionario de autoevaluación
        

    .questionnaire(v-else-if="page === 2")
      .questions
        h3 Cuestionario de autoevaluación
        br
        p 1. Con el trabajo que presentaré a los monitores y al profesor ¿logré mejorar mi lecto/escritura?
        u Si, siento que a medida que quiero investigar más del tema, aprendo más y pulo mis habilidades lectoras.
        br
        p 2. Con el trabajo que presentaré a los monitores y al profesor ¿pude aplicar/expandir/potenciar/reafirmar mi creatividad?
        u Si, entre más cosas quiero aplicar, más ideas genero y más fluye la creatividad en mi.
        br
        p 3. Con el trabajo que presentaré a los monitores y al profesor ¿pude superar mis temores de hablar ante otros?
        u A pesar de verme como alguien tímido siento que este tipo de actividades despiertan mi entusiasmo a comunicarme más, debido a la participación frente a cuestionamientos con mis compañeros de clase.
        br
        p 4. Con el trabajo que presentaré a los monitores y al profesor ¿pude exponer/defender mis ideas con respecto al tema tratado (por otros o por mí) en la conferencia anterior de la Cátedra?
        u Si, me siento super seguro de poder debatir cualquier cosa referente al tema y a mi trabajo.
        br
        p 5. Con el trabajo que presentaré a los monitores y al profesor ¿mejoré/aumenté mi control emocional?
        u Si, la calma que siento al hacer este tipo de trabajos es gratificante.
        br
        p 6. Con el trabajo que presentaré a los monitores y al profesor ¿mejoré/aumenté la autorregulación/autoconocimiento/autocontrol de mi aprendizaje?
        u Si, siento que mi aprendizaje se ve controlado cuando hago las cosas con pasión y amor.
        br
        p 7. La realización de este trabajo ¿me satisfizo?
        u Si, siento que he dejado parte de mi en el trabajo, la verdad me siento contento con lo que he hecho.
        br
        p 8. La realización de este trabajo ¿potenció mi espíritu crítico?
        u Si, la duda es parte de querer mejorar y en este caso siempre estuve intentando hacer y rehacer las cosas para mejorar.
        br
        p 9. La realización de este trabajo ¿mejoró/aumentó mi autoestima?
        u Si, siento que mi trabajo mi hizo sentirme más seguro de quien soy y de las habilidades que poseo.
        br
        p 10. ¿La realización de este trabajo despertó en mí nuevas preguntas o inquietudes?
        u Muchas, hay demasiados conocimientos que deseo adquirir para aplicar en futuros trabajos.
        br
        p 11. ¿Voy a entregar este trabajo sólo después de sentirme completamente satisfecho de su realización?
        u Si, no me gusta entregar trabajos a medias, siempre quiero entregar lo mejor de mi.
        br
        p 12. ¿Cómo podría mejorar este trabajo que acabo de realizar?
        u Aperendiendo mucho más, investigando más del tema y de como hacer mejores diseños visuales.
        br
        p 13. ¿Cómo aplicarlo/emplearlo en otras asignaturas de mi programa curricular? ¿en un problema real de mi vida/ mi profesión?
        u La programación está inmersa en mi carrera y en mi vida laboral, literalmente este trabajo puede darme oportunidades en futuras entrevistas laborales, por eso sentí la necesidad de hacerlo bien.
        br
        p 14. ¿Cuáles fueron los principales obstáculos que tuve para desarrollar este trabajo? ¿cómo los solucionaría y anticiparía en situaciones futuras?
        u El tiempo, siempre siento que el tiempo me queda corto para todo lo que deseo realizar, siento que con más tiempo podría entregar algo mucho más robusto y de mejor calidad.
        br 
        P 
          | Nota de atoevaluación
          u 5.0
        
      .actions
        button.outline(@click="page = 1") 
          i.fas.fa-chevron-left
          | Atrás

    .container(v-else-if="page === 3")
      .section-title {{ getCurrentSection('name') }}

      .slider(:class="{hide: openedSection}")
        swiper.mySwiper(:loop="true" :slidesPerView="3" :centeredSlides="true" :navigation="true" @slideChange="handleSliderChange")
          swiper-slide(v-for="(section, index) in sections" :key="index")
            section(@click="handleClickSection(section)")
              img(:src="section.img" :alt="section.name")

      .container-actions
        button.outline(@click="() => {page = 0; backgroundImage = 'https://bienestaruniversitario.medellin.unal.edu.co/images/portadas/IMG_9360.JPG'}") 
          i.fas.fa-chevron-left
          | Atrás
        button.outline(@click="showInfo = true") 
          i.fas.fa-info
          | Información

  Modal(:show="showInfo" @close="showInfo = false")
    template(#modal-header)
      h1 Acerca de Bienestar Universitario
    template(#modal-body)
      .openend-section
        h2 ¿Qué es Bienestar Universitario?
        p Bienestar universitario es ofrecido por la Universidad Nacional de Colombia como un componente fundamental para el mejoramiento de la calidad de vida de la comunidad universitaria ofreciendo así diversos programas, servicios y actividades.
        p Se implementan  políticas para el desarrollo integral, el aporte a la construcción de tejido social gracias a la promoción de la convivencia, la inclusión y la cultura universitaria fomentando acciones que propendan por una Universidad Saludable, el autocuidado y la promoción del compromiso ético como principio de la gestión y responsabilidad.
        h2 ¿Dónde está ubicado Bienestar Universitario?
        p Está ubicado en el Núcleo el Volador en el bloque 11A
        h2 ¿Quiénes conforman Binestar Universitario?
        p Se conforma por el jardín infantil, la escuela, el programa de egresados y las siguientes cinco áreas:
        ul 
          li Cultura 
          li Salud 
          Li Actividad Física y Deporte 
          li Acompañamiento Integral 
          li Gestión y Fomento Socioeconómico

  Modal(:show="openedSection" @close="openedSection = null")
    template(#modal-header)
      h1 
    template(#modal-body)
      .openend-section
        h1 {{openedSection.name}}
        p {{openedSection.goal}}
        p Dentro de las actividades que realizan se pueden mencionar: 
        ul 
         li(v-for="(item, index) in openedSection.subsections" :key="index") {{item}}
        p(v-if="openedSection.location") Ubiación:
        span(v-if="openedSection.location")
          i.fas.fa-map-marker-alt.fa-fw
          | {{openedSection.location}}
        p(v-if="openedSection.contact") Contacto:
        span(v-if="openedSection.contact") 
          i.fas.fa-envelope.fa-fw
          | {{openedSection.contact.email}}
        span(v-if="openedSection.contact") 
          i.fas.fa-phone.fa-fw
          | {{openedSection.contact.phone}}


</template>

<script src="./index.js"></script>

<style src="./styles.scss" lang="scss" scoped></style>
