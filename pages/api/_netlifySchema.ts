export type CollectionItems =
  | {
      readonly [k: string]: unknown;
    }
  | {
      readonly [k: string]: unknown;
    };

/**
 * Config file for Netlify CMS
 */
export interface NetlifyConfigSchema {
  /**
   * specifies how to access the content for your site, including authentication
   */
  readonly backend: {
    readonly [k: string]: unknown;
  };
  /**
   * Set this property to connect Netlify to a local Git repo instead of a live one
   */
  readonly local_backend?: boolean;
  readonly publish_mode?: unknown;
  /**
   * specifies the folder path where uploaded files should be saved, relative to the base of the repo.
   */
  readonly media_folder: string;
  /**
   * specifies the folder path where the files uploaded by the media library will be accessed, relative to the base of the built site. For fields controlled by [file] or [image] widgets, the value of the field is generated by prepending this path to the filename of the selected file. Defaults to the value of media_folder, with an opening / if one is not already included.
   */
  readonly public_folder?: string;
  /**
   * Media library integrations are configured via the media_library property, and its value should be an object with at least a name property. A config property can also be used for options that should be passed to the library in use.
   */
  readonly media_library?: {
    readonly name: string;
    readonly config?: {
      readonly [k: string]: unknown;
    };
    readonly [k: string]: unknown;
  };
  /**
   * should provide a URL to your published site. May be used by the CMS for various functionality. Used together with a collection's preview_path to create links to live content.
   */
  readonly site_url?: string;
  /**
   * When the display_url setting is specified, the CMS UI will include a link in the fixed area at the top of the page, allowing content authors to easily return to your main site. The text of the link consists of the URL without the protocol portion (e.g., your-site.com).
   * Defaults to site_url.
   */
  readonly display_url?: string;
  /**
   * Logo at the top of the login page. Assumed to be a URL to an image file
   */
  readonly logo_url?: string;
  readonly locale?: string;
  /**
   * shows Deploy Preview Links
   */
  readonly show_preview_links?: boolean;
  /**
   * For folder collections where users can create new items, the slug option specifies a template for generating new filenames based on a file's creation date and title field. (This means that all collections with create: true must have a title field (a different field can be used via identifier_field).
   *
   * The slug template can also reference a field value by name, eg. {{title}}. If a field name conflicts with a built in template tag name - for example, if you have a field named slug, and would like to reference that field via {{slug}}, you can do so by adding the explicit fields. prefix, eg. {{fields.slug}}.
   *
   * Available template tags:
   *
   * Any field can be referenced by wrapping the field name in double curly braces, eg. {{author}}
   * {{slug}}: a url-safe version of the title field (or identifier field) for the file
   * {{year}}: 4-digit year of the file creation date
   * {{month}}: 2-digit month of the file creation date
   * {{day}}: 2-digit day of the month of the file creation date
   * {{hour}}: 2-digit hour of the file creation date
   * {{minute}}: 2-digit minute of the file creation date
   * {{second}}: 2-digit second of the file creation date
   */
  readonly slug?: {
    /**
     *
     * unicode (default): Sanitize filenames (slugs) according to RFC3987 and the WHATWG URL spec. This spec allows non-ASCII (or non-Latin) characters to exist in URLs.
     * ascii: Sanitize filenames (slugs) according to RFC3986. The only allowed characters are (0-9, a-z, A-Z, _, -, ~).
     */
    readonly encoding?: 'unicode' | 'ascii';
    /**
     * Remove diacritics from slug characters before sanitizing. This is often helpful when using ascii encoding.
     */
    readonly clean_accents?: boolean;
    /**
     * The replacement string used to substitute unsafe characters; defaults to -
     */
    readonly sanitize_replacement?: string;
    readonly [k: string]: unknown;
  };
  /**
   * The collections setting is the heart of your Netlify CMS configuration, as it determines how content types and editor fields in the UI generate files and content in your repository. Each collection you configure displays in the left sidebar of the Content page of the editor UI, in the order they are entered into your Netlify CMS config.yml file.
   */
  readonly collections: readonly CollectionItems[];
  /**
   * This setting changes options for the editor view of the collection. It has one option so far: preview
   */
  readonly editor?: {
    /**
     * Enable preview pane for this collection; defaults to true
     */
    readonly preview?: boolean;
    readonly [k: string]: unknown;
  };
  /**
   * This setting allows the customization of the collection list view. Similar to the slug field, a string with templates can be used to include values of different fields, e.g. {{title}}. This option over-rides the default of title field and identifier_field
   * Template tags are the same as those for slug, with the following additions:
   *
   *
   * {{filename}} The file name without the extension part.
   * {{extension}} The file extension.
   * {{commit_date}} The file commit date on supported backends (git based backends).
   * {{commit_author}} The file author date on supported backends (git based backends).
   */
  readonly summary?: string;
  /**
   * An optional list of sort fields to show in the UI.
   * Defaults to inferring title, date, author and description fields and will also show Update On sort field in git based backends.
   * When author field can't be inferred commit author will be used.
   */
  readonly sortableFields?: readonly unknown[];
  /**
   * An optional list of predefined view filters to show in the UI.
   * Defaults to an empty list.
   */
  readonly view_filters?: readonly unknown[];
  readonly [k: string]: unknown;
}
