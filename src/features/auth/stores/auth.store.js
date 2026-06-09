const user = ref(null)

const isAuthenticated = computed(() => !!user.value)