export interface Pokedex {
    data:    Datum[];
    code:    number;
    message: Message;
    debug:   Debug;
    session: Session;
}

export interface Datum {
    id:                        number;
    nombre:                    string;
    descripcionBreve?:         null;
    ancho?:                    number;
    alto?:                     number;
    imagen_id:                 number;
    fechaInicio?:              null;
    fechaFin?:                 null;
    imagenDesplegada_id?:      null;
    imagenMobil_id?:           number | null;
    imagenMobilDesplegada_id?: null;
    codigoEmbebido?:           null;
    urlDestino?:               string;
    orden?:                    null;
    empresa_id?:               null;
    visitas:                   number | string;
    fechaAlta:                 Date;
    categoriaBanner_id?:       number;
    createdBy_id:              null;
    updatedBy_id:              null;
    deletedBy_id:              null;
    NombreCategoria?:          Nombre;
    imageUrl?:                 string;
    imageDesplegadaUrl?:       null;
    imageMobilUrl?:            null | string;
    imageMobilDesplegadaUrl?:  null;
    LinkInterno?:              string;
    CategoriaBanner?:          CategoriaBanner;
    Imagen:                    Imagen;
    ImagenDesplegada?:         null;
    ImagenMobil?:              Imagen | null;
    ImagenMobilDesplegada?:    null;
    tipo:                      string;
    idHash?:                   string;
    nombrePortada?:            null;
    volanta?:                  null;
    autor?:                    null;
    bajada?:                   string;
    bajadaPortada?:            null;
    cuerpo?:                   null;
    imagenesInterior?:         null;
    archivosRelacionados?:     null;
    notasRelacionadasInline?:  null;
    url?:                      null;
    original?:                 null;
    video?:                    null;
    videosRelacionados?:       null;
    audiosRelacionados?:       null;
    notasRelacionadas?:        null;
    eventosRelacionados?:      null;
    empresasRelacionadas?:     null;
    briefsRelacionadas?:       null;
    etiquetas?:                string;
    incluirMasLeidas?:         null;
    indexada?:                 number;
    publicada?:                number;
    soloPremium?:              number;
    permiteComentarios?:       null;
    categoria_id?:             number;
    recorte_id?:               null;
    evento_id?:                null;
    Relacionadas?:             null;
    imageThumbnailUrl?:        string;
    imageThumbnailFullUrl?:    string;
    nombreCategoria?:          string;
    link?:                     string;
    fullLink?:                 string;
    linkRelacionada?:          string;
    modoEdicionEnLinea?:       boolean;
    truncar?:                  boolean;
    fechaDeAlta?:              string;
    Recorte?:                  null;
    Categoria?:                Categoria;
    Paises?:                   Paise[];
}

export interface Categoria {
    id:           number;
    nombre:       string;
    orden:        number;
    color:        string;
    url:          string;
    newsletter:   null;
    fechaAlta:    Date;
    padre_id:     null;
    createdBy_id: null;
    updatedBy_id: null;
    deletedBy_id: null;
}

export interface CategoriaBanner {
    id:           number;
    nombre:       Nombre;
    fechaAlta:    Date;
    createdBy_id: null;
    updatedBy_id: null;
    deletedBy_id: null;
}

export enum Nombre {
    Banners = "Banners",
    General = "General",
    TapaAncho940X90 = "Tapa - Ancho (940x90)",
}

export interface Imagen {
    id:            number;
    nombre:        string;
    autor:         null | string;
    descripcion:   null | string;
    etiquetas:     null | string;
    archivo:       string;
    visitas:       null;
    fechaAlta:     Date;
    tipoImagen_id: number;
    createdBy_id:  null;
    updatedBy_id:  null;
    deletedBy_id:  null;
    migradoDesde:  null;
    url:           string;
    thumbnailUrl:  string;
    TipoImagen:    CategoriaBanner;
}

export interface Paise {
    id:                number;
    nombre:            string;
    prefijo:           string;
    orden:             null;
    fechaAlta:         Date;
    imagen_id:         null;
    createdBy_id:      null;
    updatedBy_id:      null;
    deletedBy_id:      null;
    imageThumbnailUrl: string;
    pivot:             Pivot;
}

export interface Pivot {
    nota_id: number;
    pais_id: number;
}

export interface Debug {
    request: any[];
}

export interface Message {
    errors: null;
    alerts: null;
}

export interface Session {
    expires:     null;
    lastRequest: null;
}