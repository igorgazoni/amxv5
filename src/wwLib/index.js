import emitter from 'tiny-emitter/instance';
import services from './services/index.js';
import { useIconsStore } from '@/pinia/icons';

 /* wwFront:start */
// eslint-disable-next-line no-undef
import plugin_f9ef41c3_1c53_4857_855b_f2f6a40b7186 from '@/components/plugins/plugin-f9ef41c3-1c53-4857-855b-f2f6a40b7186/src/wwPlugin.js';
import plugin_69d4a5bb_09a3_4f3d_a94e_667c21c057eb from '@/components/plugins/plugin-69d4a5bb-09a3-4f3d-a94e-667c21c057eb/src/wwPlugin.js';
import plugin_2bd1c688_31c5_443e_ae25_59aa5b6431fb from '@/components/plugins/plugin-2bd1c688-31c5-443e-ae25-59aa5b6431fb/src/wwPlugin.js';
import plugin_1fa0dd68_5069_436c_9a7d_3b54c340f1fa from '@/components/plugins/plugin-1fa0dd68-5069-436c-9a7d-3b54c340f1fa/src/wwPlugin.js';
/* wwFront:end */

import { computed, reactive } from 'vue';

export default {
    ...services,
     $on(event, fn) {
        emitter.on(event, fn);
    },
    $once(event, fn) {
        emitter.once(event, fn);
    },
    $emit(event, ...args) {
        if (!event) {
            return;
        }
        emitter.emit(event, ...args);
    },
    $off(event, fn) {
        emitter.off(event, fn);
    },
     front: {},
    $focus: null,
    env: process.env.NODE_ENV,
    async initFront({ router, store }) {
 
        this.front.router = router;
        /* wwFront:start */
        this.$store = store;
        /* wwFront:end */

        //Init services
        this.wwLog.init();

 
        wwLib.logStore.verbose('Starting the application...');
        await this.wwWebsiteData.init();
        this.wwLang.init(router);

        /* wwFront:start */
        // eslint-disable-next-line no-undef
        wwLib.wwPluginHelper.registerPlugin('plugin-f9ef41c3-1c53-4857-855b-f2f6a40b7186', plugin_f9ef41c3_1c53_4857_855b_f2f6a40b7186);
wwLib.wwPluginHelper.registerPlugin('plugin-69d4a5bb-09a3-4f3d-a94e-667c21c057eb', plugin_69d4a5bb_09a3_4f3d_a94e_667c21c057eb);
wwLib.wwPluginHelper.registerPlugin('plugin-2bd1c688-31c5-443e-ae25-59aa5b6431fb', plugin_2bd1c688_31c5_443e_ae25_59aa5b6431fb);
wwLib.wwPluginHelper.registerPlugin('plugin-1fa0dd68-5069-436c-9a7d-3b54c340f1fa', plugin_1fa0dd68_5069_436c_9a7d_3b54c340f1fa);
        /* wwFront:end */

 
        services.scrollStore.start();
        services.keyboardEventStore.start();
    },
     // TODO: Verify with Alexis, still uses wwImageMultiLang
    getResponsiveStyleProp({ store, style, uid, states = [], prop }) {
        store = store || wwLib.getFrontWindow().wwLib.$store;
        if (!style && uid) {
            const wwObject = this.$store.getters['websiteData/getWwObjects'][uid];
            if (!wwObject) return '';
            style = (wwObject._state || {}).style || {};
        }

        const screenSizes = store.getters['front/getScreenSizes'];
        const screenSize = store.getters['front/getScreenSize'];

        let value = '';

        for (const media in screenSizes) {
            if (style[media] && typeof style[media][prop] !== 'undefined') {
                value = style[media][prop];
            }
            if (media === screenSize) {
                break;
            }
        }
        for (const state of states) {
            for (const media in screenSizes) {
                if (style[`${state}_${media}`] && style[`${state}_${media}`][prop]) {
                    value = style[`${state}_${media}`][prop];
                }
                if (media === screenSize) {
                    break;
                }
            }
        }

        return value;
    },
    globalContext: reactive({
        page: computed(() => {
            const page = wwLib.$store.getters['websiteData/getPage'];
            if (!page) return {};
            else if (!page.cmsDataSetPath) return { ...pageSanitizer(page) };
            return { ...pageSanitizer(page), data: wwLib.$store.getters['data/getPageCollectionData'] };
        }),
        pageParameters: computed(() => {
            const pageParameters = Object.values(wwLib.$store.getters['data/getPageParameterVariables']);
            const pageParametersValueMap = {};
            for (const pageParameter of pageParameters) pageParametersValueMap[pageParameter.id] = pageParameter.value;
            return pageParametersValueMap;
        }),
        pages: computed(() => {
            const pages = wwLib.$store.getters['websiteData/getPages'];
            const pagesValueMap = {};
            for (const page of pages) pagesValueMap[page.id] = pageSanitizer(page);
            return pagesValueMap;
        }),
        colors: computed(() => {
            const theme = wwLib.$store.getters['front/getTheme'];
             /* wwFront:start */
            // eslint-disable-next-line no-unreachable, no-undef
            return theme === 'dark' ? {"136ac32b-a7ef-4350-9688-bdcc3a9ba3c8":"#1DF3D0","31ca3538-cd88-4cd9-bc16-442d8a4430c2":"#1C1C1C","fe6daab9-f076-49f6-ace3-e99c938beeb1":"#252526","f625151a-8e39-4d70-9c43-9c9611196b62":"#e1e8ed","7cb97e5b-c95d-43dc-8bae-0eda65509471":"#A1A1AA","f95b5b7a-f001-4a2f-acf1-4af516bc688e":"#FFFFFF","8eaec61e-dbd9-4f73-aba3-2d99fa2a3a17":"#3D3D43","90df3288-e262-4b81-94a8-0553f4ca8032":"#252526","1b4db6de-c852-412f-9bb0-0d9aa219f5fd":"#F0F0F0","7878f6dd-6f12-453a-8645-c614b12931dc":"#07A8D5","d36c3e17-3d9a-4924-8e11-63c1f293de65":"#D5B607","bc8e7c55-4a11-4afb-93ee-935ae8366258":"#07A8D5","d3a49805-61f0-4926-8c06-2e1f90e2150d":"#FFFFFF","4fd32e58-0ffb-4053-af73-60b8aa50f3d0":"#000000","e99015b2-d7be-4178-bf00-1f92dc4144f1":"#f6f6f6","109b4a3f-df38-480a-96de-6449b87720cd":"#e7e7e7","9fd322cb-5399-4536-bf8e-939a194d05db":"#b0b0b0","fdf68224-d7d8-4f83-9fb5-314d826f9a5f":"#888888","f104bb44-6aab-4947-8e96-cb89cc15b033":"#6d6d6d","cef0aae5-9d67-4fcf-9d79-755caaaf6938":"#5d5d5d","32701286-8243-4e7c-ae37-942ffd9813f5":"#3d3d3d","892b3030-2c4b-4a72-b57c-c33abd971952":"#222222","f044ba99-3ee7-4ae3-ab37-c3484f7b4050":"#060f11","cd42601f-3954-4e4e-9e95-51692b8dcebc":"#1F79FE","3c270a3b-19ff-48ed-8623-eac8c6bd1ab9":"#0E3C7F","4932bda3-f7ea-4905-8b9c-740fe9463b6d":"#FFFFFF","a6d57a2f-b240-402d-958b-7e612708a37b":"#000000","ae5eb0d2-5971-4a47-8307-6f6cb4f8e314":"#f6f6f6","4bf361aa-54a8-4ddd-9f01-eded51616ed2":"#e7e7e7","09d8e6fe-a142-4d70-9e9f-017a2296e898":"#b0b0b0","330b3d13-764c-44b8-9974-8bbc519411be":"#888888","14397b47-e12a-4ab7-becb-e77fd8d89972":"#6d6d6d","84a8b515-e613-42d9-b0c8-da2d4a84eb60":"#5d5d5d","df12a772-23fc-4fa4-8ac0-e6d60c78100f":"#3d3d3d","7f437e1f-86d4-4ad9-8417-d3c0808ab4b5":"#222222","682e4e18-b455-4c05-9690-3e4edc875257":"#060f11","d70b7472-b966-4742-9285-63118edd81c3":"#1F79FE","d96f26ea-82e5-432b-8de2-8f8266e9289d":"#0E3C7F"} : {"136ac32b-a7ef-4350-9688-bdcc3a9ba3c8":"#1DF3D0","31ca3538-cd88-4cd9-bc16-442d8a4430c2":"#FFFFFF","fe6daab9-f076-49f6-ace3-e99c938beeb1":"#FFFFFF","f625151a-8e39-4d70-9c43-9c9611196b62":"#000000","7cb97e5b-c95d-43dc-8bae-0eda65509471":"#A1A1AA","f95b5b7a-f001-4a2f-acf1-4af516bc688e":"#000000","8eaec61e-dbd9-4f73-aba3-2d99fa2a3a17":"#E1E8ED","90df3288-e262-4b81-94a8-0553f4ca8032":"#F5F5F5","1b4db6de-c852-412f-9bb0-0d9aa219f5fd":"#F0F0F0","7878f6dd-6f12-453a-8645-c614b12931dc":"#D5B607","d36c3e17-3d9a-4924-8e11-63c1f293de65":"#D5B607","bc8e7c55-4a11-4afb-93ee-935ae8366258":"#07A8D5","d3a49805-61f0-4926-8c06-2e1f90e2150d":"#FFFFFF","4fd32e58-0ffb-4053-af73-60b8aa50f3d0":"#000000","e99015b2-d7be-4178-bf00-1f92dc4144f1":"#f6f6f6","109b4a3f-df38-480a-96de-6449b87720cd":"#e7e7e7","9fd322cb-5399-4536-bf8e-939a194d05db":"#b0b0b0","fdf68224-d7d8-4f83-9fb5-314d826f9a5f":"#888888","f104bb44-6aab-4947-8e96-cb89cc15b033":"#6d6d6d","cef0aae5-9d67-4fcf-9d79-755caaaf6938":"#5d5d5d","32701286-8243-4e7c-ae37-942ffd9813f5":"#3d3d3d","892b3030-2c4b-4a72-b57c-c33abd971952":"#222222","f044ba99-3ee7-4ae3-ab37-c3484f7b4050":"#060f11","cd42601f-3954-4e4e-9e95-51692b8dcebc":"#1F79FE","3c270a3b-19ff-48ed-8623-eac8c6bd1ab9":"#0E3C7F","4932bda3-f7ea-4905-8b9c-740fe9463b6d":"#FFFFFF","a6d57a2f-b240-402d-958b-7e612708a37b":"#000000","ae5eb0d2-5971-4a47-8307-6f6cb4f8e314":"#f6f6f6","4bf361aa-54a8-4ddd-9f01-eded51616ed2":"#e7e7e7","09d8e6fe-a142-4d70-9e9f-017a2296e898":"#b0b0b0","330b3d13-764c-44b8-9974-8bbc519411be":"#888888","14397b47-e12a-4ab7-becb-e77fd8d89972":"#6d6d6d","84a8b515-e613-42d9-b0c8-da2d4a84eb60":"#5d5d5d","df12a772-23fc-4fa4-8ac0-e6d60c78100f":"#3d3d3d","7f437e1f-86d4-4ad9-8417-d3c0808ab4b5":"#222222","682e4e18-b455-4c05-9690-3e4edc875257":"#060f11","d70b7472-b966-4742-9285-63118edd81c3":"#1F79FE","d96f26ea-82e5-432b-8de2-8f8266e9289d":"#0E3C7F"};
            /* wwFront:end */
        }),
        spacings:
         /* wwFront:start */
        // eslint-disable-next-line no-unreachable, no-undef
        {"b2d49095-73cd-4632-b124-3d4143f7c49f":"96px","17765de1-737d-44c4-9500-c97f2432130c":"45px","0a048f45-5558-4f22-b33b-29b6b955b7fa":"16px","dbc2c56a-8941-4906-aa62-03a88727a994":"256px","f8f4ecaa-d0c0-4f03-85ef-612b9d9c31ab":"96px","34cf215e-55f0-4f6b-9d32-70dd1707ba82":"45px","e9c57d32-e7f0-426d-830f-f06cad642b83":"16px","8d6c682d-f2c7-4be5-8b01-c6bc819c0d1b":"256px"},
        /* wwFront:end */
        typographies:
         /* wwFront:start */
        // eslint-disable-next-line no-unreachable, no-undef
        {},
        /* wwFront:end */
        browser: computed(() => {
            const router = wwLib.manager ? wwLib.getEditorRouter() : wwLib.getFrontRouter();
            const currentRoute = router.currentRoute.value;
            let currentQueries = currentRoute.query;
             return {
                url: window.location.origin + currentRoute.fullPath,
                path: currentRoute.path,
                // verify if auth plugin
                 /* wwFront:start */
                // eslint-disable-next-line no-dupe-keys
                source: currentQueries._source,
                /* wwFront:end */
                query: currentQueries,
                domain: window.location.hostname,
                baseUrl: window.location.origin,
                breakpoint: wwLib.$store.getters['front/getScreenSize'],
                environment: wwLib.getEnvironment(),
                theme: wwLib.$store.getters['front/getTheme'],
            };
        }),
        screen: services.scrollStore.screen,
        componentPositionInfo: services.scrollStore.componentPositionInfo,
    }),

    pageData: computed(() => {
        const lang = wwLib.$store.getters['front/getLang'];
        const cmsDataSetPath = wwLib.$store.getters['websiteData/getPage'].cmsDataSetPath;
        if (!cmsDataSetPath) {
            return { lang };
        }

        return { lang, data: wwLib.$store.getters['data/getPageCollectionData'] };
    }),

    getEnvironment() {
        return wwLib.manager
            ? 'editor'
            : window.location.host.includes(
                  '-staging.' + (process.env.WW_ENV === 'staging' ? process.env.VUE_APP_PREVIEW_URL : '')
              )
            ? 'staging'
            : window.location.host.includes(process.env.VUE_APP_PREVIEW_URL)
            ? 'preview'
            : 'production';
    },

    useBaseTag() {
        return (
            wwLib.getEnvironment() === 'production' &&
            window.wwg_designInfo.baseTag &&
            window.wwg_designInfo.baseTag.href
        );
    },

    getBaseTag() {
        let baseTag = window.wwg_designInfo.baseTag?.href || '';
        if (!baseTag.startsWith('/')) {
            baseTag = '/' + baseTag;
        }
        if (!baseTag.endsWith('/')) {
            baseTag += '/';
        }
        return baseTag;
    },

    /**
     * @PUBLIC_API
     */
    getFrontWindow() {
        if (document.querySelector('.ww-manager-iframe')) {
            return document.querySelector('.ww-manager-iframe').contentWindow;
        }
        return window;
    },

    /**
     * @PUBLIC_API
     */
    getFrontDocument() {
        return this.getFrontWindow().document;
    },

    /**
     * @PUBLIC_API
     */
    getFrontRouter() {
        return this.front.router;
    },

    /**
     * @PUBLIC_API
     */
    getEditorWindow() {
         // eslint-disable-next-line no-unreachable
        return null;
    },

    /**
     * @PUBLIC_API
     */
    getEditorDocument() {
         // eslint-disable-next-line no-unreachable
        return null;
    },

    /**
     * @PUBLIC_API
     */
    getEditorRouter() {
        return this.editor.router;
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED wwLib.wwApp.goTo
     */
    goTo(...args) {
        wwLib.wwLog.warn('wwLib.goTo is DEPRECATED, use wwLib.wwApp.goTo instead');
        wwLib.wwApp.goTo(...args);
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED wwLib.wwUtils.getStyleFromToken
     */
    getStyleFromToken(...args) {
        // wwLib.wwLog.warn('wwLib.getStyleFromToken is DEPRECATED, use wwLib.wwUtils.getStyleFromToken instead');
        return wwLib.wwUtils.getStyleFromToken(...args);
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED wwLib.wwUtils.getTypoFromToken
     */
    getTypoFromToken(...args) {
        // wwLib.wwLog.warn('wwLib.getTypoFromToken is DEPRECATED, use wwLib.wwUtils.getTypoFromToken instead');
        return wwLib.wwUtils.getTypoFromToken(...args);
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED
     */
    element(value) {
        wwLib.wwLog.warn('wwLib.element is DEPRECATED');
        if (typeof value === 'object') {
            return { isWwObject: true, ...value };
        } else {
            return { isWwObject: true, type: value };
        }
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED wwLib.wwUtils.resolveObjectPropertyPath
     */
    resolveObjectPropertyPath(...args) {
        // wwLib.wwLog.warn(
        //     'wwLib.resolveObjectPropertyPath is DEPRECATED, use wwLib.wwUtils.resolveObjectPropertyPath instead'
        // );
        return wwLib.wwUtils.resolveObjectPropertyPath(...args);
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED wwLib.wwutils.getTextStyleFromContent
     */
    getTextStyleFromContent(...args) {
        // wwLib.wwLog.warn(
        //     'wwLib.getTextStyleFromContent is DEPRECATED, use wwLib.wwUtils.getTextStyleFromContent instead'
        // );
        return wwLib.wwUtils.getTextStyleFromContent(...args);
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED wwLib.wwWorkflow.executeGlobal
     */
    async executeWorkflow(...args) {
        wwLib.wwLog.warn('wwLib.executeWorkflow is DEPRECATED, use wwLib.wwWorkflow.executeGlobal instead');
        return wwLib.wwWorkflow.executeGlobal(...args);
    },

    /**
     * @PUBLIC_API
     * @EDITOR
     * @DEPRECATED wwLib.wwEditor.findParentUidByFlag
     */
    findParentUidByFlag(...args) {
        wwLib.wwLog.warn('wwLib.wwEditor.findParentUidByFlag is DEPRECATED, use wwLib.findParentUidByFlag instead');
        return wwLib.wwEditor.findParentUidByFlag(...args);
    },

    /**
     * @PUBLIC_API
     * @EDITOR
     * @DEPRECATED wwLib.wwEditor.selectParentByFlag
     */
    selectParentByFlag(...args) {
        wwLib.wwLog.warn('wwLib.wwEditor.selectParentByFlag is DEPRECATED, use wwLib.selectParentByFlag instead');
        return wwLib.wwEditor.selectParentByFlag(...args);
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED wwLib.wwElement.useCreate
     */
    useCreateElement() {
        wwLib.wwLog.warn('wwLib.useCreateElement is DEPRECATED, use wwLib.wwElement.useCreate instead');
        return this.wwElement.useCreate();
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED wwLib.wwElement.useLayoutStyle
     */
    useLayoutStyle() {
        wwLib.wwLog.warn('wwLib.useLayoutStyle is DEPRECATED, use wwLib.wwElement.useLayoutStyle instead');
        return wwLib.wwElement.useLayoutStyle();
    },

    /**
     * @PUBLIC_API
     */
    useIcons() {
        const store = useIconsStore();
        return {
            getIcon: store.getIcon,
        };
    },
};

function pageSanitizer(page) {
    const keysToInclude = [
        'id',
        'name',
        'folder',
        'metaImage',
        'pageLoaded',
        'paths',
        'langs',
        'meta',
        'title',
        'sections',
        'pageUserGroups',
    ];

    const _page = {};
    keysToInclude.forEach(key => {
        _page[key] = page[key];
    });

    _page.meta && delete _page.meta.__typename;
    for (const section of _page.sections || []) {
        delete section.__typename;
    }

    const lang = wwLib.$store.getters['front/getLang'];
    if (_page.paths) _page.path = _page.paths[lang] || _page.paths.default;
    else _page.path = null;

    _page.lang = lang;

    return _page;
}
