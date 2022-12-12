import { CollectionConfig } from "payload/types";
import { isAdmin } from "../access/isAdmin";
import { Banner } from "../blocks/Banner";
import { BlogContent } from "../blocks/BlogContent";
import { BlogMarkdown } from "../blocks/BlogMarkdown";
import { CallToAction } from "../blocks/CallToAction";
import { CardGrid } from "../blocks/CardGrid";
import { CaseStudiesHighlight } from "../blocks/CaseStudiesHighlight";
import { CaseStudyCards } from "../blocks/CaseStudyCards";
import { Code } from "../blocks/Code";
import { CodeFeature } from "../blocks/CodeFeature";
import { Content } from "../blocks/Content";
import { ContentGrid } from "../blocks/ContentGrid";
import { Form } from "../blocks/Form";
import { HoverHighlights } from "../blocks/HoverHIghlights";
import { LinkGrid } from "../blocks/LinkGrid";
import { MediaBlock } from "../blocks/Media";
import { MediaContent } from "../blocks/MediaContent";
import { Slider } from "../blocks/Slider";
import { Steps } from "../blocks/Steps";
import { StickyHighlights } from "../blocks/StickyHighlights";

export const ReusableContent: CollectionConfig = {
  slug: 'reusable-content',
  admin: {
    useAsTitle: 'title'
  },
  access: {
    create: isAdmin,
    read: () => true,
    readVersions: isAdmin,
    update: isAdmin,
    delete: isAdmin
  },
  labels: {
    singular: 'Reusable Content',
    plural: 'Reusable Contents'
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true
    },
    {
      name: 'layout',
      type: 'blocks',
      blocks: [
        Banner,
        BlogContent,
        BlogMarkdown,
        CallToAction,
        CardGrid,
        CaseStudyCards,
        CaseStudiesHighlight,
        Code,
        CodeFeature,
        Content,
        ContentGrid,
        Form,
        HoverHighlights,
        LinkGrid,
        MediaBlock,
        MediaContent,
        Slider,
        Steps,
        StickyHighlights
      ]
    }
  ]
}
