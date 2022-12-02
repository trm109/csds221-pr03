<template>    
    <div class="row">
        <div class="col-4"></div>
        <ul class="list-group col-4">
            <li class="list-group-item" v-for="entry in entries" :key="entry.id">
                <div class="row">
                    <div class="col-1" >
                        <font-awesome-icon :icon="['fas', 'envelope']" />
                    </div>
                    <div class="col-9" style="text-align: left;">
                        {{ entry.text }}
                    </div>
                    <div class="col-1">
                        <font-awesome-icon :icon="['fas', 'heart-pulse']" />
                    </div>
                    <div class="col-1" style="text-align: left;">
                        {{ entry.health }}
                    </div>
                </div>
                
            </li>
        </ul>
        <div class="col-4"  ></div>
    </div>
</template>
<script> 
export default {
    name: 'EntryLog',
    props: {
        entries: {
            type: Array,
            required: true
        }
    }
}
</script>

<style scoped>
font-awesome-icon {
    color: #f00;
    size: 10px 10px;
}
</style>