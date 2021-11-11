import { API, graphqlOperation } from 'aws-amplify'
import { createAlbum as createAlbumMutation } from '@/graphql/mutations'
import { getAlbum as getAlbumQuery } from '@/graphql/queries'
import { listAlbums as listAlbumsQuery } from '@/graphql/queries'

// Vuex store for albums
export const albumInfo = {
    namespaced: true,

    // State
    state: { albums: null },
    
    // Mutations
    mutations: {
        setAlbums(state, payload) {
            state.albums = payload;
        }
    },

    // Actions
    actions: {
        async createAlbum(_, newAlbum) {
            try {
                await API.graphql(graphqlOperation(createAlbumMutation, {input: newAlbum}));
            } catch (error) {
                console.log("createalbum", error);
            }
        },
        async getAlbum(_, albumId) {
            return await API.graphql(
                graphqlOperation(getAlbumQuery, {id: albumId})
            )
        },
        async getAlbumsData({ commit }) {
            const albumsData = await API.graphql(graphqlOperation(listAlbumsQuery));
            commit("setAlbums", albumsData.data.listAlbums.items);
        }
    },

    // Getters
    getters: {
        albums: (state) => state.albums
    }
}