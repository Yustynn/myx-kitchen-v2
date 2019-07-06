<template>
    <div id="app">
        <nav>
            <router-link to='/'>Login</router-link>
            <router-link to='/options'>Options</router-link>
            <router-link to='/orders'>Orders</router-link>
            <router-link to='/stock'>Stock</router-link>
        </nav>
        <router-view />
    </div>
</template>
