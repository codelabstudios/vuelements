<template lang="jade">

    header.c-card__header
        h2.c-heading {{ title }}
            .c-heading__sub {{ description }}

</template>

<script type="text/babel">

    export default {
        props: ['title', 'description']
    }

</script>