import React from 'react';
import {AlbumModel} from '../../models/AlbumModel';
import {PhotoModel} from '../../models/PhotoModel';
import {Card, Icon, Image, Label, Button, CardContent, CardDescription} from 'semantic-ui-react'
import './Album.css'

interface AlbumProps {
    album: AlbumModel;
    albumPhotos: PhotoModel[];
}

const Album: React.FC<AlbumProps> = ({album, albumPhotos, children}) =>{

    const renderPreviewImages = () => {
        return (
            albumPhotos
            .filter((photo, index) => photo && index < 4)
            .map((photo, index) => {
                return <Image key = {index} src = {photo.url} />;
            })
        );
    }

    const renderTags = () => {
        return (
            album.tags
            .map((tagname, index) =>{
                return <Label ley ={index}>{tagname}</Label>
            })
        );
    }
    
    return (
        <Card>
            <Card.Content className='header'>
                <Card.Header>
                    {album.name}
                </Card.Header>
                <Label attached='top right'>
                <Icon name='photo' />
                    {albumPhotos.length}
                </Label>
            </Card.Content>

            <Card.Content className = 'photos-container'>
                <Image.Group size = 'tiny'>
                    {renderPreviewImages()}
                </Image.Group>
            </Card.Content>

            <Card.Content>
                <Card.Description as='p'>
                    {album.description}
                </Card.Description> 
                <Card.Meta>
                    <Label.Group tag size='mini'>
                        {renderTags()}
                    </Label.Group>
                </Card.Meta>
            </Card.Content>
            <Button.Group basic attached = 'bottom'>    
                {children}
            </Button.Group>
        </Card>
    )
}
export default Album