<template>
  <div class="login">
    <div class="login__Title">Login</div>
    <div class="login__Fields">
      <div>
        <div class="login__Fields__Title">
          <label for="email">Email</label>
        </div>
        <div>
          <input type="email" id="email" />
        </div>
      </div>
      <div>
        <div class="login__Fields__Title">
          <label for="email">Password</label>
        </div>
        <div>
          <input type="password" id="password"/>
        </div>
      </div>
      <div class="login__Fields__warrning">Your data is invalid</div>
    </div>
    <div>
      <button>Login</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Login",
  };
</script>

<style></style>
