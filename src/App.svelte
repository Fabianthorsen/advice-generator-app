<script lang="ts">
  import { onMount } from "svelte";
  import { adviceData } from "./stores";

  async function fetchAdvice() {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    adviceData.set(data.slip);
  }

  onMount(async () => {
    fetchAdvice();
  });

  let adviceValue: string;
  adviceData.subscribe(({ id, advice }) => {
    adviceValue = advice;
  });
</script>

<main>
  <p>{adviceValue}</p>
  <button on:click={fetchAdvice}>Click me</button>
</main>

<style>
  * {
    color: #fff;
  }
</style>
