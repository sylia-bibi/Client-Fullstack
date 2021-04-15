<template>
  <div class="flex items-center min-h-screen bg-gray-50 dark:bg-gray-900">
    <div class="container mx-auto">
        <div class="max-w-md mx-auto my-10 bg-white p-5 rounded-md shadow-sm">
            <div class="text-center">
                <h1 class="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">Contact</h1>
                <p class="text-gray-400 dark:text-gray-400">Fill up the form below to send us a message.</p>
            </div>
            <div class="m-7">
                <form >

                    <input type="hidden" name="apikey" value="YOUR_ACCESS_KEY_HERE">
                    <input type="hidden" name="subject" value="New Submission from Web3Forms">
                    <input type="checkbox" name="botcheck" id="" style="display: none;">


                    <div class="mb-6">
                        <label for="firstName" class="block mb-2 text-sm text-gray-600 dark:text-gray-400">FirstName</label>
                        <input type="text" v-model="firstName" name="name" id="name" placeholder="John Doe" required class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                    </div>
                    <div class="mb-6">
                        <label for="email" class="block mb-2 text-sm text-gray-600 dark:text-gray-400">Email Address</label>
                        <input v-model="email" type="email" name="email" id="email" placeholder="you@company.com" required class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                    </div>
                    <div class="mb-6">

                        <label for="subject" class="text-sm text-gray-600 dark:text-gray-400">Subject</label>
                        <input type="text" v-model="subject" name="Subject" id="Subject" placeholder="Prise de contact" required class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                    </div>
                    <div class="mb-6">
                        <label for="message" class="block mb-2 text-sm text-gray-600 dark:text-gray-400">Your Message</label>

                        <textarea rows="5" name="message" v-model="message" id="message" placeholder="Your Message" class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" required></textarea>
                    </div>
                    <div class="mb-6">
                        <button @click.prevent="sendMail" class="w-full px-3 py-4 text-white bg-pink-500 rounded-md focus:bg-indigo-600 focus:outline-none">Send Message</button>
                    </div>
                    <p class="text-base text-center text-gray-400" id="result">
                    </p>
                </form>
            </div>
        </div>
    </div>
</div>

</template>

<script>

import Title from '../components/ui/TitlePage'

export default {
  components:{
    Title
  },
  data: function() {
    return {
      firstName: "",
      message: "",
      subject: "",
      email: "",
      successMessage:""
    };
  },
  methods: {
    sendMail: function() {
      console.log(this.firstName, this.message, this.subject, this.email);
        fetch('/api/send-email', {
          method: "POST",
          headers: {
            "Content-type":"application/json"
          },
          body: JSON.stringify({
            firstName: this.firstName,
            email: this.email,
            subject:this.subject,
            message: this.message
          })
        }) 
        .then(res=>res.json())
        .then(data=>{
          console.log(data);
          this.successMessage=data.message
          })
        .catch(err => console.log(err))
    }
  }
};
</script>

<style>

</style>
