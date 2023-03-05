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
    <p>Advice #{storeData.id}</p>
    <h1>“{storeData.advice}”</h1>
    <button on:click={fetchAdvice}>
      <img src="./icon-dice.svg" alt="dice" />
    </button>
  </section>
</main>

<style lang="scss">
  main {
    font-family: "Manrope", Arial, Helvetica, sans-serif;
    display: grid;
    place-items: center;
    height: 100vh;

    section {
      background-color: hsl(217, 19%, 38%);
      color: hsl(193, 38%, 86%);
      width: 300px;
      text-align: center;
      border-radius: 10px;
      padding: 20px;
      position: absolute;
      display: grid;
      place-items: center;

      h1 {
        font-size: 0.9rem;
      }

      p {
        font-size: 0.5rem;
        color: hsl(150, 100%, 66%);
      }

      button {
        display: grid;
        place-items: center;
        position: relative;
        top: 50px;
        border-radius: 50%;
        width: 60px;
        height: 60px;
        border: none;
        background-color: hsl(150, 100%, 66%);

        &:hover {
          box-shadow: 0 0 30px hsl(150, 100%, 66%);
        }

        &:active {
          box-shadow: 0 0 30px hsl(150, 100%, 66%);
          background-color: darken($color: hsl(150, 100%, 66%), $amount: 20%);
        }
      }
    }
  }
</style>
