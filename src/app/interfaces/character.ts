export interface Character {
    id:          number;
    name:        string;
    description: string;
    modified:    string;
    thumbnail:   ThumbnailCh;
    resourceURI: string;
    comics:      ComicsCh;
    series:      ComicsCh;
    stories:     StoriesCh;
    events:      ComicsCh;
    urls:        URL[];
}

export interface ComicsCh {
    available:     number;
    collectionURI: string;
    items:         ComicsItemCh[];
    returned:      number;
}

export interface ComicsItemCh {
    resourceURI: string;
    name:        string;
}

export interface StoriesCh {
    available:     number;
    collectionURI: string;
    items:         StoriesItemCh[];
    returned:      number;
}

export interface StoriesItemCh {
    resourceURI: string;
    name:        string;
    type:        TypeCh;
}

export enum TypeCh {
    Cover = "cover",
    InteriorStory = "interiorStory",
}

export interface ThumbnailCh {
    path:      string;
    extension: string;
}

export interface URLCh {
    type: string;
    url:  string;
}
