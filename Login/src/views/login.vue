<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
  <div class="hero min-h-screen bg-base-200">
    <div class="hero-content flex-col lg:flex-row">
      <div class="lg:card text-center lg:text-left">
        <div class="lg:card-body">
          <h1 class="text-5xl font-bold">Login</h1>
          <p class="py-6 w-full lg:text-lg">Welcome back! Please sign in to access your account</p>
        </div>
      </div>
      <div class="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form class="card-body">
          <div class="form-control">
            <label class="label">
              <span class="label-text">Email</span>
            </label>
            <input type="email" placeholder="Email" class="input input-bordered" required />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Password</span>
            </label>
            <input type="password" placeholder="Password" class="input input-bordered" required />
            <label class="label">
              <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
            </label>
          </div>
          <div class="mt-6">
            <RouterLink to="/home"><button class="btn btn-primary w-80">Login</button></RouterLink>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>