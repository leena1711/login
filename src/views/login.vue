<template>
  <RouterView />
  <div class="hero min-h-screen bg-base-200">
    <div class="hero-content flex-col lg:flex-row">
      <div class="lg:card text-center lg:text-left">
        <!-- Text -->
        <div v-if="loginMode" class="lg:card-body lg:max-w-md">
          <h1 class="text-5xl font-bold">Login</h1>
          <p class="py-6 w-full lg:text-lg">
            Welcome back! Please sign in to access your account
          </p>
        </div>
        <div v-else class="lg:card-body lg:max-w-md">
          <h1 class="text-5xl font-bold">Register</h1>
          <p class="py-6 w-full lg:text-lg">
            Sign up now to unlock exclusive benefits and join our vibrant
            community!
          </p>
        </div>
      </div>
      <div class="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <!-- Form -->
        <form v-if="loginMode" class="card-body" @submit.prevent="login">
          <div class="form-control">
            <label class="label">
              <span class="label-text">Username</span>
            </label>
            <input
              v-model="loginEmail"
              type="username"
              placeholder="Username"
              class="input input-bordered"
              required
            />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Password</span>
            </label>
            <input
              v-model="loginPassword"
              type="password"
              placeholder="Password"
              class="input input-bordered"
              required
            />
            <label class="label">
              <a href="#" class="label-text-alt link link-hover"
                >Forgot password?</a
              >
            </label>
          </div>
          <div class="mt-6">
            <button type="submit" class="btn btn-primary w-80">Login</button>
          </div>
          <div class="flex flex-col text-center">
            <p v-if="loginError" class="text-red-500">{{ loginError }}</p>
            <p>
              Don't have an account?
              <a
                @click.prevent="toggleMode"
                class="cursor-pointer hover:underline"
                >Sign up</a
              >
            </p>
          </div>
        </form>
        <!-- Registration form -->
        <form v-else class="card-body" @submit.prevent="register">
          <div class="form-control">
            <label class="label">
              <span class="label-text">Email</span>
            </label>
            <input
              v-model="registerEmail"
              type="username"
              placeholder="Email"
              class="input input-bordered"
              required
            />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Password</span>
            </label>
            <input
              v-model="registerPassword"
              type="password"
              placeholder="Password"
              class="input input-bordered"
              required
            />
          </div>
          <div class="mt-6">
            <button type="submit" class="btn btn-primary w-80">Register</button>
          </div>
          <div class="flex flex-col text-center">
            <p v-if="registerError" class="text-red-500">{{ registerError }}</p>
            <p>
              Already have an account?
              <a
                @click.prevent="toggleMode"
                class="cursor-pointer hover:underline"
                >Sign in</a
              >
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const loginMode = ref(true); // Determines whether login or registration form is displayed
const loginEmail = ref("");
const loginPassword = ref("");
const loginError = ref(null);

const registerEmail = ref("");
const registerPassword = ref("");
const registerError = ref(null);

const router = useRouter();

const toggleMode = () => {
  loginMode.value = !loginMode.value; // Toggle between login and registration form
};

const login = async () => {
  try {
    const response = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: loginEmail.value,
        password: loginPassword.value,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      // Login berhasil
      console.log(data); // Data respons dari server (termasuk token)
      // Simpan token ke dalam local storage
      localStorage.setItem("token", data.token);
      // Redirect ke halaman home
      router.push("/home");
    } else {
      // Login gagal, coba ambil pesan kesalahan dari respons API
      const errorData = await response.json();
      if (errorData && errorData.message) {
        loginError.value = errorData.message;
      } else {
        loginError.value = "Username atau password salah";
      }
    }
  } catch (error) {
    console.error("Error:", error);
    // Tampilkan pesan kesalahan jika terjadi error
    loginError.value = "Terjadi kesalahan saat melakukan login";
  }
};

const register = async () => {
  try {
    // Implement registration logic here
    console.log("Registration Completed");
    // Example: You can send a POST request to a registration endpoint
    window.location.href = "/";
  } catch (error) {
    console.error("Error:", error);
    // Update error message if registration fails
    registerError.value = "Registration failed";
  }
};
</script>
