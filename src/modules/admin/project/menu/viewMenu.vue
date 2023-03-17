<template>
<div class="services">
    <div class="lists">
        <h4 class="heading">Project View</h4>
        <div class="table_responsive">
            <table class="table">
                 <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Image</th>
                    <th scope="col">Menu Name</th>
                    <th scope="col">Menu Descripton</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(data, index) in get_project" :key="data._id">
                    <th scope="row" class="table_td">{{ index+1 }}</th>
                    <td class="table_td"><img :src="data.feature_image" style="width:50px; height:50px;" alt="" ></td>
                    <td class="table_td">{{data.menu_name}}</td>
                    <td class="table_td">{{data.menu_description}}</td>
                    <td class="table_td"><router-link :to="'/admin/project/'+data._id+'/view_menu'">Edit</router-link>&nbsp;<router-link @click="deleteSubMenu(data._id)" to="#">Delete</router-link></td>
                  </tr>
                 
                </tbody>
            </table>
        </div>
    </div>
</div>
</template>

<script>
import projectApi from '../api/project_api.js';
import {ref, onMounted} from 'vue';
import {useRoute} from 'vue-router';
import {useStore} from 'vuex';

export default{
    setup() {
        const get_project = ref([]);
        const page = ref(1);
        const total_result = ref(0);
        const route = useRoute();
        const store = useStore();
        const view_limit = 20;

        const getProject = async()=>{
            const data = await projectApi.viewProjectMenuData(page.value, route.params.pid, view_limit);
            console.log(data.data);
            total_result.value = data.data.results;
            get_project.value =data.data.data;

        }

        const deleteSubMenu = async(id) =>{
          const data = await projectApi.deleteProjectSubMenu(id);

           const payload = {
            type: data.data.data.type,
            message: data.data.data.message
        }
        store.dispatch('addNotification', payload);
        getProject();
        }
        onMounted(()=>{
            getProject();
        })
        return{
            page, 
            get_project,
            getProject,
            deleteSubMenu
        }
    }
}
</script>


<style lang="scss" scoped>
.table_td{
          height: 50px;
        vertical-align: middle;
}
.lists {
    .heading {
            font-size: 18px;
            font-weight: 600;
            color: #444;
            margin-bottom: 10px;
    }
    .data_view {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        row-gap: 12px;
        margin-bottom: 12px;
        .items {
            display: flex;
            list-style: none;
            .item {
                .link {
                    color: #5492bc;
                    font-size: 14px;
                    margin: 0 4px;
                    cursor: pointer;
                }
            }
        }
        .search {
            form {
                display: flex;
                flex-wrap: wrap;
                row-gap: 12px;
                input {
                    width: 200px;
                    outline: none;
                    border: 1px solid #ddd;
                    border-radius: 4px;
                    padding: 8px;
                }
                button {
                    border: none;
                    outline: none;
                    background-color: transparent;
                    border: 1px solid #5492bc;
                    color: #5492bc;
                    padding: 8px 16px;
                    margin-left: 8px;
                    border-radius: 4px;
                    cursor: pointer;
                }
            }
        }
    }
    .table_filter {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        row-gap: 12px;
        .actions {
            display: flex;
            flex-wrap: wrap;
            row-gap: 12px;
            column-gap: 12px;
            form {
                display: flex;
                flex-wrap: wrap;
                row-gap: 12px;
                column-gap: 12px;
                .form_select {
                    width: auto;
                    outline: none;
                    border: 1px solid #ddd;
                    border-radius: 4px;
                    padding: 8px;
                }
                button {
                    border: none;
                    outline: none;
                    background-color: transparent;
                    border: 1px solid #5492bc;
                    color: #5492bc;
                    padding: 8px 16px;
                    margin-left: 8px;
                    border-radius: 4px;
                    cursor: pointer;
                }
            }
        }
        .pagination {
            display: flex;
            gap: 20px;
            align-items: center;
            .row_count {
                font-size: 14px;
                color: #444;
            }
            .page {
                border: 1px solid #ddd;
                border-radius: 4px;
                overflow: hidden;
                .link {
                    border-right: 1px solid #ddd;
                    text-decoration: none;
                    padding: 4px 8px;
                    display: inline-block;
                    font-size: 13px;
                    cursor: pointer;
                    transition: all 0.3s ease 0s;
                    -webkit-transition: all 0.3s ease 0s;
                    &:last-child {
                        border-right: 0px solid #ddd;
                    }
                    &:hover {
                        background-color: #5492bc;
                        color: #fff;
                    }
                }
            }
        }
    }
    .table_responsive {
        width: 100%;
        overflow-x: auto;
        border: 1px solid #ddd;
        margin: 12px 0;
        .table {
            font-family: Arial, Helvetica, sans-serif;
            border-collapse: collapse;
            width: 100%;
            td, th {
                padding: 12px 8px;
            }
            
            th {
                padding-top: 12px;
                padding-bottom: 12px;
                text-align: left;
                color: #444;
                font-size: 14px;
            }
            td {
                font-size: 14px;
                color: #444;
            }
            thead {
                border-bottom: 1px solid #ddd;
            }
            tbody {
                tr {
                    border-bottom: 1px solid #ddd;
                }
                tr:nth-child(odd){
                    background-color: #f6f6f6;
                }
                tr:hover {
                    background-color: #eee;
                }
                .img {
                    span {
                        width: 40px;
                        height: 40px;
                        display: block;
                        img {
                            max-width: 100%;
                        }
                    }
                }
                .actions {
                    .edit, .delete { 
                        border-radius: 4px;
                        text-decoration: none;
                        color: #fff;
                        padding: 4px 8px;
                        font-size: 13px;
                        transition: all 0.3s ease 0s;
                        -webkit-transition: all 0.3s ease 0s;
                    }
                    .edit {
                        background-color: #5492bc;
                        &:hover {
                            background-color: #5da8da;
                        }
                    }
                    .delete {
                        background-color: #ca371a;
                        margin-left: 4px;
                        &:hover {
                            background-color: #dc492c;
                        }
                    }
                }
            }
            tfoot {
                th {
                    border-bottom: 0px solid #ddd;
                }
            }
        }
    }
}

</style>