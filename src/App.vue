<template lang="pug">
router-view
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Overpass:wght@100;200;300;400;500;600;700;800;900&display=swap');

* {
  padding: 0;
  margin: 0;
  font-family: 'Overpass', sans-serif;
}

body {
  background: $background;
  overflow: hidden;
}

::-webkit-scrollbar {
  width: 7px;
  border-radius: $border-radius;
}
::-webkit-scrollbar-track {
  background: transparent;
  border-radius: $border-radius;
}
::-webkit-scrollbar-thumb {
  background: $text;
  border-radius: $border-radius;
}

.swiper-container {
  height: 100%;
}

.swiper-button-prev,
.swiper-button-next {
  font-weight: 700;
  color: #93b5c6 !important;
}

$bubble-count: 50;
$sway-type: 'sway-left-to-right', 'sway-right-to-left';

@function random_range($min, $max) {
  $rand: random();
  $random_range: $min + floor($rand * (($max - $min) + 1));
  @return $random_range;
}

@function sample($list) {
  @return nth($list, random(length($list)));
}

.bubbles {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  z-index: -1;
}

.bubble {
  position: absolute;
  left: var(--bubble-left-offset);
  bottom: -75%;
  display: block;
  width: var(--bubble-radius);
  height: var(--bubble-radius);
  border-radius: 50%;
  animation: float-up var(--bubble-float-duration) var(--bubble-float-delay)
    ease-in infinite;

  &::before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: hsla(183, 27%, 39%, 0.3);
    border-radius: inherit;
    animation: var(--bubble-sway-type) var(--bubble-sway-duration)
      var(--bubble-sway-delay) ease-in-out alternate infinite;
  }

  @for $i from 0 through $bubble-count {
    &:nth-child(#{$i}) {
      --bubble-left-offset: #{random_range(0vw, 100vw)};
      --bubble-radius: #{random_range(1vw, 10vw)};
      --bubble-float-duration: #{random_range(6s, 12s)};
      --bubble-sway-duration: #{random_range(4s, 6s)};
      --bubble-float-delay: #{random_range(0s, 4s)};
      --bubble-sway-delay: #{random_range(0s, 4s)};
      --bubble-sway-type: #{sample($sway-type)};
    }
  }
}

@keyframes float-up {
  to {
    transform: translateY(-175vh);
  }
}

@keyframes sway-left-to-right {
  from {
    transform: translateX(-100%);
  }

  to {
    transform: translateX(100%);
  }
}

@keyframes sway-right-to-left {
  from {
    transform: translateX(100%);
  }

  to {
    transform: translateX(-100%);
  }
}
</style>
