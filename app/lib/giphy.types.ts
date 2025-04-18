interface Image {
    height?: string;
    width?: string;
    size?: string;
    url: string;
    mp4_size?: string;
    mp4?: string;
    webp_size?: string;
    webp?: string;
    frames?: string;
    hash?: string;
  };

export interface Gif {
    type: string;
    id: string;
    url: string;
    slug: string;
    bitly_gif_url: string;
    bitly_url: string;
    embed_url: string;
    username: string;
    source: string;
    title: string;
    rating: string;
    content_url: string;
    source_tld: string;
    source_post_url: string;
    is_sticker: number;
    import_datetime: string;
    trending_datetime: string;
    images: {
      original: Image;
      downsized:Image;
      downsized_large: Image;
      downsized_medium: Image;
      downsized_small: Image;
      downsized_still:Image;
      fixed_height: Image;
      fixed_height_downsampled: Image;
      fixed_height_small:Image;
      fixed_height_small_still: Image;
      fixed_height_still: Image;
      fixed_width: Image;
      fixed_width_downsampled: Image;
      fixed_width_small:Image;
      fixed_width_small_still: Image;
      fixed_width_still: Image;
      looping: Image;
      original_still:Image;
      original_mp4:Image;
      preview:Image;
      preview_gif: Image;
      preview_webp:Image;
      hd:Image;
      "480w_still": Image;
      "4k": Image;
    };
    user: {
      avatar_url: string;
      banner_image: string;
      banner_url: string;
      profile_url: string;
      username: string;
      display_name: string;
      description: string;
      instagram_url: string;
      website_url: string;
      is_verified: boolean;
    };
    analytics_response_payload: string;
    analytics: {
      onload: { url: string };
      onclick: { url: string };
      onsent: { url: string };
    };
    alt_text: string;
  }
  