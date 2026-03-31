<script setup lang="ts">
</script>

<template>
  <main class="home">
    <van-nav-bar title="你好" />
    <div class="home__content">
      <van-image
        round
        width="80"
        height="80"
        src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
      />
      <h1 class="home__title">你好，世界！</h1>
      <p class="home__desc">欢迎使用 Vue 3 + Vite + Vant 移动端模板</p>
      <van-button type="primary" round @click="$router.push('/about')">了解更多</van-button>
    </div>
  </main>
</template>

<style scoped lang="less">
.home {
  min-height: 100vh;
  background-color: var(--van-background);

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 60px 24px 24px;
    gap: 20px;
  }

  &__title {
    font-size: 28px;
    font-weight: 600;
    color: var(--van-text-color);
    margin: 0;
  }

  &__desc {
    font-size: 14px;
    color: var(--van-text-color-2);
    text-align: center;
    margin: 0;
  }
}
</style>
