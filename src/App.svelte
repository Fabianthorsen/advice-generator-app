<script lang="ts">
  import { onMount } from "svelte";
  import { adviceData } from "./stores";

  type Advice = {
    id: number;
    advice: string;
  };

  async function fetchAdvice() {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    adviceData.set({ id: data.slip.id, advice: data.slip.advice });
  }

  onMount(async () => {
    fetchAdvice();
  });

  let storeData: Advice;
  adviceData.subscribe(({ id, advice }) => {
    storeData = { id, advice };
  });
</script>

<main>
  <section>
    <p>ADVICE #{storeData.id}</p>
    <h1>“{storeData.advice}”</h1>
    <picture>
      <source
        media="(min-width: 599.99px)"
        srcset="/src/assets/pattern-divider-desktop.svg"
      />
      <img src="/src/assets/pattern-divider-mobile.svg" alt="divider" />
    </picture>
    <button on:click={fetchAdvice}>
      <img src="/src/assets/icon-dice.svg" alt="dice" />
    </button>
  </section>
</main>

<style lang="scss">
  $bright-green: hsl(150, 100%, 66%);
  $pale-grey: hsl(193, 38%, 86%);
  $blue-grey: hsl(217, 19%, 24%);
  main {
    font-family: "Manrope", Arial, Helvetica, sans-serif;
    font-weight: 800;
    display: grid;
    place-items: center;
    height: 100vh;

    section {
      background-color: $blue-grey;
      color: $pale-grey;
      width: 300px;
      text-align: center;
      border-radius: 10px;
      padding: 25px 25px 0 25px;
      position: absolute;
      display: grid;
      place-items: center;

      h1 {
        font-size: 0.8rem;
      }

      p {
        font-size: 0.38rem;
        letter-spacing: 4px;
        color: $bright-green;
      }

      button {
        display: grid;
        place-items: center;
        position: relative;
        top: 30px;
        border-radius: 50%;
        width: 60px;
        height: 60px;
        border: none;
        background-color: $bright-green;

        &:hover {
          box-shadow: 0 0 30px $bright-green;
        }

        &:active {
          box-shadow: 0 0 30px $bright-green;
          background-color: darken($color: $bright-green, $amount: 20%);
        }
      }
    }
  }

  @media screen and (min-width: 599.999px) {
    main {
      section {
        width: 500px;
      }
    }
  }
</style>
