/** @type {import('@enhance/types').EnhanceElemFn} */
export default function JLSectionHero({html, state}) {
  const {attrs = {}} = state
  const {src, alt} = attrs
  return html`
    <style>
      .sectionHero {
        max-width: 5.5rem;
        display: block;
        margin-block: var(--space--2);
        float: right;
        margin-inline: var(--space--2);
      }

      .sectionHero img {
        border-color: var(--navy);
        border-width: 2px;
        border-radius: 100%;
      }

      @media only screen and (min-width:36em) {
        .sectionHero {
          max-width: 7rem;
        }
      }
    </style>

    <enhance-image
        class="sectionHero"
        format="webp"
        defaultwidth="100"
        variant1="(min-width: 36em) 150"
        src="${src}"
        alt="${alt}">
    </enhance-image>
  `
}
