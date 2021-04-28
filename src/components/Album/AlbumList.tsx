import {AlbumModel} from '../../models/AlbumModel'
import {PhotoModel} from '../../models/PhotoModel'
import {Card, Button, Icon} from 'semantic-ui-react'
import Album, {AlbumForm} from '../Album'
import WithLightBox from '../Common/WithLightBox'
import { DeleteButton } from '../Common'
import { Switch } from 'react-router'

interface AlbumListProps {
    albums: AlbumModel[];
    photos: PhotoModel[];
    deleteAlbum: (index: string) => void;
    editAlbum: Function;
    createAlbum: Function;
}

const AlbumList = ( {albums, photos, deleteAlbum, editAlbum, createAlbum}: AlbumListProps) =>{

    const getAlbumPhotos = (album: AlbumModel) => {
        return photos
            .filter(photo => album.photoIds.includes(photo.id));
    }

    const renderAlbums = () => {
        return(
            albums.map(album => {
                const albumPhotos = getAlbumPhotos(album);
                
                return (
                    <Album
                        key = {album.id}
                        album = {album}
                        albumPhotos = {albumPhotos}
                    >
                    
                    <Button icon>
                        <WithLightBox
                        photos = {albumPhotos}
                        >
                        <Icon name='play' />
                        </WithLightBox>
                    </Button>
                    
                    <AlbumForm
                        formType='Edit'
                        index ={album.id}
                        albumProp={album}
                        photos={photos}
                        editAlbum={editAlbum}
                        createAlbum={createAlbum}
                    />

                    <DeleteButton
                        index = {album.id}
                        objectName = {album.name}
                        deleteObject = {deleteAlbum}
                    />
                </Album>
                );
            })
        );
    }

    return(
        <div>
            {/* <StatusBar title={`${photos.length} Photo(s) total`}>
                <PhotoForm 
                formType='New'
                createPhoto={createPhoto} 
                index={''}
                editPhoto={editPhoto}
                />
            </StatusBar> */}
            <Card.Group itemsPerRow={6} doubling>
                {renderAlbums()}
            </Card.Group>
        </div>
    )
}

export default AlbumList;
