import {useEffect, useState} from 'react'
import { AlbumModel } from '../../models/AlbumModel'
import {PhotoModel} from '../../models/PhotoModel'
import * as api from '../../api'
import {Switch, Route} from 'react-router';
import {AlbumList} from '../Album';
import {PhotoList} from '../Photo';
import { Message } from 'semantic-ui-react';


const Main  = () => {
    const [albums, setAlbums] = useState<AlbumModel[]>([]);
    const [photos, setPhotos] = useState<PhotoModel[]>([]);

     useEffect(() => {
        
        const localAlbums = localStorage.getItem('albums');
        const localPhotos = localStorage.getItem('photos');

        if(localAlbums && localPhotos) {
            setAlbums(JSON.parse(localAlbums));
            setPhotos(JSON.parse(localPhotos));
        }
    }, []);

    useEffect(() =>{
        localStorage.setItem(
            'albums', JSON.stringify(albums)
        );
        }, [albums]);
    
    useEffect(() => {
        localStorage.setItem(
            'photos',JSON.stringify(photos)
        );
    }, [photos]);

    const createAlbum = (album: AlbumModel) => {}

    const editAlbum = (key: string, updatedAlbum: AlbumModel) => {} 

    const deleteAlbum = (key: string) =>{
        const updatedAlbums = albums.filter(album => album.id !== key);
        setAlbums(updatedAlbums);
    }

    const createPhoto = (photo: PhotoModel) => {
        const timestamp = Date.now();
        photo.id = `photo-${timestamp}`;
        setPhotos(prevPhotos => [...prevPhotos, photo]);
    }

    const editPhoto = (key: string, updatedPhoto: PhotoModel) => {
        const updatedPhotos = photos.map(photo => photo.id === key ? updatedPhoto: photo);  
        setPhotos(updatedPhotos);
    }

    const deletePhoto = (key: string) =>{
        const updatedPhotos = photos.filter(photo => photo.id !== key);
        setPhotos(updatedPhotos);
    }

    const albumList = () => <AlbumList
                        albums = {albums}
                        photos = {photos}
                        deleteAlbum = {deleteAlbum}
                        editAlbum = {editAlbum}
                        createAlbum = {createAlbum}
                        />;
    const photoList = () => <PhotoList
                        photos = {photos}
                        deletePhoto = {deletePhoto}
                        editPhoto = {editPhoto}
                        createPhoto = {createPhoto}
                        />;

    const error = () => <Message
                        icon = "warning circle"
                        header = "Error!"
                        content = "Try again."
                        />;

    return (
        <Switch>
            <Route exact path="/" component={albumList} />
            <Route path = "/albums" render={albumList} />
            <Route path = "/photos" render={photoList} />
            <Route render = {error} />
        </Switch>
    )
}

export default Main
