import React from "react";
import type { ProjectItem } from "@/data/resumeData";

export function SectionUnderline({ className = "w-14" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 84 10"
      fill="none"
      className={`mt-1.5 text-[#E86C2C] ${className}`}
    >
      <path
        d="M2 7.5C24 2.2 56 1.8 82 5.2"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function HeroDeveloperIllustration() {
  return (
    <svg
      role="img"
      aria-label="Illustration of Aminu Aliyu working on a laptop in an orange beanbag chair"
      viewBox="0 0 540 430"
      fill="none"
      className="w-full max-w-[520px] h-auto select-none"
    >
      {/* Hanging Pendant Lamp */}
      <line x1="175" y1="10" x2="175" y2="86" stroke="#18181B" strokeWidth="2.2" />
      <path
        d="M143 116C143 97 157 86 175 86C193 86 207 97 207 116H143Z"
        fill="#FFFFFF"
        stroke="#18181B"
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      {/* Glowing orange bulb */}
      <path
        d="M166 117C166 123 170 127 175 127C180 127 184 123 184 117H166Z"
        fill="#E86C2C"
        stroke="#18181B"
        strokeWidth="2"
      />
      <line x1="175" y1="133" x2="175" y2="140" stroke="#E86C2C" strokeWidth="2" strokeLinecap="round" />
      <line x1="162" y1="130" x2="157" y2="136" stroke="#E86C2C" strokeWidth="2" strokeLinecap="round" />
      <line x1="188" y1="130" x2="193" y2="136" stroke="#E86C2C" strokeWidth="2" strokeLinecap="round" />

      {/* Floating Wall Shelf (top right) */}
      <g transform="translate(335, 32)">
        {/* Books on shelf */}
        <rect x="16" y="18" width="12" height="44" rx="1.5" fill="#FFFFFF" stroke="#18181B" strokeWidth="2.2" />
        <line x1="19" y1="26" x2="25" y2="26" stroke="#18181B" strokeWidth="1.8" />
        <rect x="28" y="14" width="13" height="48" rx="1.5" fill="#FFFFFF" stroke="#18181B" strokeWidth="2.2" />
        {/* Tilted orange book */}
        <g transform="rotate(-14 48 38)">
          <rect x="42" y="16" width="14" height="46" rx="2" fill="#E86C2C" stroke="#18181B" strokeWidth="2.2" />
          <line x1="45" y1="24" x2="53" y2="24" stroke="#FFFFFF" strokeWidth="1.6" />
        </g>

        {/* Potted Plant */}
        <path
          d="M92 38H118L114 62H96L92 38Z"
          fill="#E86C2C"
          stroke="#18181B"
          strokeWidth="2.2"
          strokeLinejoin="round"
        />
        <rect x="89" y="33" width="32" height="6" rx="2" fill="#E86C2C" stroke="#18181B" strokeWidth="2.2" />
        {/* Plant leaves */}
        <path
          d="M105 33C105 18 93 10 85 15C85 25 95 31 105 33Z"
          fill="#FFFFFF"
          stroke="#18181B"
          strokeWidth="2.2"
          strokeLinejoin="round"
        />
        <path
          d="M105 33C105 16 118 8 126 14C125 25 115 31 105 33Z"
          fill="#FFFFFF"
          stroke="#18181B"
          strokeWidth="2.2"
          strokeLinejoin="round"
        />
        <path
          d="M105 33C101 18 105 4 105 4C105 4 110 18 105 33Z"
          fill="#FFFFFF"
          stroke="#18181B"
          strokeWidth="2.2"
          strokeLinejoin="round"
        />

        {/* Shelf board */}
        <rect x="0" y="62" width="142" height="8" rx="3" fill="#FFFFFF" stroke="#18181B" strokeWidth="2.2" />
        <circle cx="18" cy="73" r="2.5" fill="#18181B" />
        <circle cx="124" cy="73" r="2.5" fill="#18181B" />
      </g>

      {/* Floor Line */}
      <line x1="45" y1="392" x2="505" y2="392" stroke="#18181B" strokeWidth="2.6" strokeLinecap="round" />
      <line x1="15" y1="392" x2="33" y2="392" stroke="#18181B" strokeWidth="2.6" strokeLinecap="round" />

      {/* Big Burnt-Orange Beanbag Chair */}
      <path
        d="M208 336C198 294 226 254 274 242C312 232 342 162 388 164C436 166 468 228 462 302C457 358 430 391 372 391H246C220 391 212 362 208 336Z"
        fill="#E86C2C"
        stroke="#18181B"
        strokeWidth="2.6"
        strokeLinejoin="round"
      />
      {/* Beanbag crease lines */}
      <path
        d="M275 344C308 352 356 342 384 306"
        stroke="#18181B"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M412 214C432 246 436 304 415 352"
        stroke="#18181B"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeDasharray="4 4"
      />

      {/* Developer Character */}
      {/* Back Leg & Pant */}
      <path
        d="M236 286L156 282L122 364L148 372L184 312L254 322Z"
        fill="#141413"
        stroke="#18181B"
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      {/* Front Leg & Pant */}
      <path
        d="M268 292L194 282L168 370L198 376L222 314L296 326Z"
        fill="#141413"
        stroke="#18181B"
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      {/* White Cuff Lines on Pants */}
      <line x1="120" y1="358" x2="149" y2="367" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="167" y1="364" x2="198" y2="370" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />

      {/* Left Sneaker (Orange & White) */}
      <g transform="translate(82, 362)">
        <path
          d="M12 18C18 14 32 6 42 4L56 12L52 27H6C4 23 7 20 12 18Z"
          fill="#FFFFFF"
          stroke="#18181B"
          strokeWidth="2.2"
          strokeLinejoin="round"
        />
        <path d="M18 16L40 8L46 24H14L18 16Z" fill="#E86C2C" />
        <rect x="4" y="25" width="50" height="5" rx="2" fill="#FFFFFF" stroke="#18181B" strokeWidth="2" />
      </g>

      {/* Right Sneaker (Orange & White) */}
      <g transform="translate(136, 366)">
        <path
          d="M10 16C18 12 32 4 42 2L56 10L53 24H5C3 20 6 18 10 16Z"
          fill="#FFFFFF"
          stroke="#18181B"
          strokeWidth="2.2"
          strokeLinejoin="round"
        />
        <path d="M18 14L40 6L46 21H14L18 14Z" fill="#E86C2C" />
        <rect x="4" y="22" width="51" height="5" rx="2" fill="#FFFFFF" stroke="#18181B" strokeWidth="2" />
      </g>

      {/* White T-Shirt / Torso */}
      <path
        d="M276 200C298 194 338 198 354 214L374 268L336 280L328 254L308 310L246 296L262 232L244 244L228 218C242 206 258 203 276 200Z"
        fill="#FFFFFF"
        stroke="#18181B"
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      {/* Collar detail */}
      <path d="M288 198C294 210 310 212 318 200" stroke="#18181B" strokeWidth="2.2" strokeLinecap="round" />

      {/* Arms holding laptop */}
      <path
        d="M342 268C326 286 294 290 266 282"
        stroke="#18181B"
        strokeWidth="2.4"
        strokeLinecap="round"
      />

      {/* Head & Neck */}
      <path
        d="M292 182L290 202C296 208 310 208 316 200L318 182Z"
        fill="#FFFFFF"
        stroke="#18181B"
        strokeWidth="2.2"
      />
      {/* Face */}
      <path
        d="M274 148C272 172 284 190 304 190C324 190 336 174 336 152C336 132 322 120 304 120C284 120 276 132 274 148Z"
        fill="#FFFFFF"
        stroke="#18181B"
        strokeWidth="2.4"
      />
      {/* Ear */}
      <path
        d="M334 152C341 150 345 156 343 163C341 169 335 170 332 167"
        fill="#FFFFFF"
        stroke="#18181B"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      {/* Stylized Black Hair */}
      <path
        d="M273 145C268 128 280 108 302 108C314 104 334 108 340 124C348 132 346 148 336 154C335 140 326 132 312 132C298 132 284 136 273 145Z"
        fill="#141413"
        stroke="#18181B"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      {/* Glasses */}
      <circle cx="286" cy="154" r="9.5" fill="#FFFFFF" stroke="#18181B" strokeWidth="2.2" />
      <circle cx="310" cy="154" r="9.5" fill="#FFFFFF" stroke="#18181B" strokeWidth="2.2" />
      <line x1="295.5" y1="154" x2="300.5" y2="154" stroke="#18181B" strokeWidth="2.2" />
      <line x1="319.5" y1="153" x2="334" y2="151" stroke="#18181B" strokeWidth="2" />
      {/* Eyes & Smile */}
      <circle cx="286" cy="154" r="2" fill="#18181B" />
      <circle cx="310" cy="154" r="2" fill="#18181B" />
      <path d="M294 172C298 176 305 176 309 172" stroke="#18181B" strokeWidth="2.2" strokeLinecap="round" />

      {/* Laptop on Lap */}
      <g transform="translate(184, 224)">
        {/* Laptop screen back */}
        <path
          d="M6 0H82C85 0 88 2 89 6L102 60H18L3 6C2 2 4 0 6 0Z"
          fill="#FFFFFF"
          stroke="#18181B"
          strokeWidth="2.4"
          strokeLinejoin="round"
        />
        {/* Orange badge on laptop lid */}
        <circle cx="52" cy="30" r="6" fill="#E86C2C" opacity="0.9" />
        {/* Laptop base */}
        <rect x="16" y="58" width="114" height="7" rx="3.5" fill="#FFFFFF" stroke="#18181B" strokeWidth="2.4" />
      </g>
    </svg>
  );
}

export function AboutDeveloperIllustration() {
  return (
    <svg
      role="img"
      aria-label="Illustration of Aminu Aliyu holding a warm orange coffee mug beside a window and stack of engineering books"
      viewBox="0 0 420 340"
      fill="none"
      className="w-full max-w-[390px] h-auto select-none"
    >
      {/* Arched Window in background left */}
      <g transform="translate(36, 18)">
        <path
          d="M0 72C0 32 32 0 72 0C112 0 144 32 144 72V178H0V72Z"
          fill="#FAF6F2"
          stroke="#18181B"
          strokeWidth="2"
        />
        <line x1="72" y1="0" x2="72" y2="178" stroke="#18181B" strokeWidth="1.8" />
        <line x1="0" y1="92" x2="144" y2="92" stroke="#18181B" strokeWidth="1.8" />
        {/* Soft clouds outside window */}
        <path
          d="M16 64C16 56 23 52 30 54C34 46 46 46 50 54C56 54 60 59 60 64H16Z"
          fill="#FFFFFF"
          stroke="#18181B"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path
          d="M84 134C84 126 91 122 98 124C102 116 114 116 118 124C124 124 128 129 128 134H84Z"
          fill="#FFFFFF"
          stroke="#18181B"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      </g>

      {/* Character Torso & T-shirt */}
      <path
        d="M118 206C136 190 166 184 198 184C230 184 260 192 276 210L296 306H102L118 206Z"
        fill="#FFFFFF"
        stroke="#18181B"
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      {/* Sleeve lines */}
      <line x1="142" y1="242" x2="108" y2="234" stroke="#18181B" strokeWidth="2.2" />
      <line x1="254" y1="242" x2="288" y2="234" stroke="#18181B" strokeWidth="2.2" />
      {/* Neck & Collar */}
      <path d="M178 164V190C178 198 214 198 214 190V164" fill="#FFFFFF" stroke="#18181B" strokeWidth="2.2" />
      <path d="M170 186C180 202 212 202 222 186" stroke="#18181B" strokeWidth="2.2" strokeLinecap="round" />

      {/* Head (looking slightly right with warm expression) */}
      <path
        d="M166 116C166 148 182 170 206 170C230 170 244 150 244 122C244 96 228 80 204 80C180 80 166 94 166 116Z"
        fill="#FFFFFF"
        stroke="#18181B"
        strokeWidth="2.4"
      />
      {/* Ear */}
      <path
        d="M167 122C158 120 154 128 157 136C160 143 166 144 170 140"
        fill="#FFFFFF"
        stroke="#18181B"
        strokeWidth="2.2"
      />
      {/* Stylized Black Hair */}
      <path
        d="M164 122C156 98 170 68 202 68C222 62 248 72 250 94C250 106 238 110 226 106C212 102 194 104 184 118C178 126 172 130 164 122Z"
        fill="#141413"
        stroke="#18181B"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      {/* Eyes, Eyebrow & Smile */}
      <path d="M204 112C208 109 214 109 218 112" stroke="#18181B" strokeWidth="2.2" strokeLinecap="round" />
      <circle cx="212" cy="122" r="2.6" fill="#18181B" />
      <circle cx="233" cy="122" r="2.6" fill="#18181B" />
      <path d="M224 122L229 134L221 136" stroke="#18181B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M208 146C214 151 223 150 227 145" stroke="#18181B" strokeWidth="2.2" strokeLinecap="round" />

      {/* Forearm & Hand holding Orange Coffee Mug */}
      <path
        d="M112 236L104 294L192 276L190 254L138 264L142 242"
        fill="#FFFFFF"
        stroke="#18181B"
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      {/* Orange Coffee Mug */}
      <g transform="translate(194, 236)">
        <path
          d="M32 8H42C48 8 52 12 52 18C52 24 48 28 42 28H32"
          stroke="#18181B"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
        <rect
          x="0"
          y="0"
          width="34"
          height="38"
          rx="5"
          fill="#E86C2C"
          stroke="#18181B"
          strokeWidth="2.4"
        />
        {/* Steam wisps */}
        <path d="M11 -6C11 -12 15 -14 15 -20" stroke="#E86C2C" strokeWidth="2" strokeLinecap="round" />
        <path d="M22 -4C22 -10 26 -12 26 -18" stroke="#E86C2C" strokeWidth="2" strokeLinecap="round" />
      </g>

      {/* Stack of Books on Desk (Right) */}
      <g transform="translate(274, 256)">
        <rect x="6" y="0" width="84" height="16" rx="4" fill="#FFFFFF" stroke="#18181B" strokeWidth="2.2" />
        <line x1="16" y1="8" x2="78" y2="8" stroke="#18181B" strokeWidth="1.5" />
        <rect x="0" y="16" width="92" height="17" rx="4" fill="#FDF2EA" stroke="#18181B" strokeWidth="2.2" />
        <line x1="12" y1="24.5" x2="80" y2="24.5" stroke="#E86C2C" strokeWidth="1.8" />
        <rect x="4" y="33" width="88" height="17" rx="4" fill="#FFFFFF" stroke="#18181B" strokeWidth="2.2" />
        <line x1="14" y1="41.5" x2="78" y2="41.5" stroke="#18181B" strokeWidth="1.5" />
      </g>

      {/* Desk Baseline */}
      <line x1="48" y1="306" x2="388" y2="306" stroke="#18181B" strokeWidth="2.6" strokeLinecap="round" />
    </svg>
  );
}

export function ProjectCardIllustration({
  type,
}: {
  type: ProjectItem["illustrationType"];
}) {
  switch (type) {
    case "desktop-analytics":
      return (
        <svg aria-hidden="true" viewBox="0 0 280 165" fill="none" className="w-full h-40">
          <g transform="rotate(-2 140 82)">
            {/* Monitor frame */}
            <rect x="52" y="18" width="176" height="106" rx="7" fill="#18181B" stroke="#18181B" strokeWidth="2.4" />
            <rect x="57" y="23" width="166" height="92" rx="4" fill="#FFFFFF" />
            {/* Left light pane */}
            <rect x="63" y="30" width="96" height="78" rx="3" fill="#FAF7F4" stroke="#E5E0D8" strokeWidth="1.2" />
            <circle cx="76" cy="44" r="6" fill="#FDE6D8" stroke="#E86C2C" strokeWidth="1.6" />
            <rect x="88" y="40" width="56" height="4" rx="2" fill="#18181B" />
            <rect x="88" y="48" width="38" height="3" rx="1.5" fill="#78716C" />
            <rect x="70" y="62" width="80" height="14" rx="3" fill="#FFFFFF" stroke="#18181B" strokeWidth="1.4" />
            <rect x="70" y="82" width="80" height="18" rx="3" fill="#E86C2C" opacity="0.18" />
            <path d="M76 94L92 87L108 91L128 84L142 86" stroke="#E86C2C" strokeWidth="2" strokeLinecap="round" />
            {/* Right dark pane */}
            <rect x="164" y="30" width="53" height="78" rx="3" fill="#18181B" />
            <circle cx="176" cy="44" r="5" fill="#E86C2C" />
            <rect x="185" y="41" width="24" height="3.5" rx="1.5" fill="#FFFFFF" />
            <rect x="171" y="58" width="38" height="4" rx="2" fill="#A8A29E" />
            <rect x="171" y="67" width="32" height="4" rx="2" fill="#A8A29E" />
            <rect x="171" y="84" width="38" height="14" rx="3" fill="#E86C2C" />
            {/* Monitor Stand */}
            <path d="M126 124H154L160 144H120L126 124Z" fill="#18181B" />
            <rect x="104" y="143" width="72" height="5" rx="2.5" fill="#18181B" />
          </g>
        </svg>
      );

    case "map-dashboard":
      return (
        <svg aria-hidden="true" viewBox="0 0 280 165" fill="none" className="w-full h-40">
          <g transform="rotate(1.5 140 82)">
            {/* Wide Tablet / Situation Room Screen */}
            <rect x="48" y="22" width="184" height="114" rx="8" fill="#FFFFFF" stroke="#18181B" strokeWidth="2.4" />
            <line x1="48" y1="36" x2="232" y2="36" stroke="#18181B" strokeWidth="1.8" />
            <circle cx="58" cy="29" r="2.2" fill="#E86C2C" />
            <circle cx="66" cy="29" r="2.2" fill="#18181B" />
            <circle cx="74" cy="29" r="2.2" fill="#18181B" />
            {/* Left KPI column */}
            <rect x="58" y="45" width="52" height="36" rx="4" fill="#FAF6F2" stroke="#18181B" strokeWidth="1.5" />
            <circle cx="74" cy="60" r="8" stroke="#E86C2C" strokeWidth="2" />
            <rect x="87" y="55" width="16" height="4" rx="2" fill="#18181B" />
            <rect x="87" y="63" width="12" height="3" rx="1.5" fill="#E86C2C" />
            <rect x="58" y="88" width="52" height="36" rx="4" fill="#FAF6F2" stroke="#18181B" strokeWidth="1.5" />
            <rect x="65" y="96" width="36" height="4" rx="2" fill="#18181B" />
            <rect x="65" y="105" width="28" height="4" rx="2" fill="#E86C2C" />
            {/* Right Geospatial Chart / Wave Area */}
            <rect x="118" y="45" width="104" height="79" rx="4" fill="#FFFFFF" stroke="#18181B" strokeWidth="1.5" />
            <path
              d="M126 98C138 82 148 92 160 76C172 60 184 84 196 68C204 58 210 62 215 54"
              stroke="#E86C2C"
              strokeWidth="2.4"
              strokeLinecap="round"
            />
            {/* Bar chart below curve */}
            <rect x="130" y="106" width="8" height="12" rx="1.5" fill="#18181B" />
            <rect x="145" y="100" width="8" height="18" rx="1.5" fill="#E86C2C" />
            <rect x="160" y="104" width="8" height="14" rx="1.5" fill="#18181B" />
            <rect x="175" y="96" width="8" height="22" rx="1.5" fill="#E86C2C" />
            <rect x="190" y="102" width="8" height="16" rx="1.5" fill="#18181B" />
            <rect x="205" y="92" width="8" height="26" rx="1.5" fill="#E86C2C" />
          </g>
        </svg>
      );

    case "mobile-app":
      return (
        <svg aria-hidden="true" viewBox="0 0 280 165" fill="none" className="w-full h-40">
          <g transform="rotate(8 140 82)">
            {/* Tilted Smartphone Frame */}
            <rect x="102" y="12" width="76" height="140" rx="12" fill="#18181B" stroke="#18181B" strokeWidth="2.2" />
            <rect x="106" y="17" width="68" height="130" rx="9" fill="#FFFFFF" />
            {/* Notch */}
            <rect x="128" y="21" width="24" height="4" rx="2" fill="#18181B" />
            {/* App Cards inside screen */}
            <g transform="translate(114, 34)">
              <circle cx="9" cy="9" r="6" fill="#FDE6D8" stroke="#E86C2C" strokeWidth="1.8" />
              <rect x="20" y="5" width="30" height="4" rx="2" fill="#18181B" />
              <rect x="20" y="12" width="22" height="3" rx="1.5" fill="#78716C" />
            </g>
            <g transform="translate(114, 62)">
              <circle cx="9" cy="9" r="6" fill="#FDE6D8" stroke="#E86C2C" strokeWidth="1.8" />
              <rect x="20" y="5" width="28" height="4" rx="2" fill="#18181B" />
              <rect x="20" y="12" width="20" height="3" rx="1.5" fill="#78716C" />
            </g>
            <g transform="translate(114, 90)">
              <circle cx="9" cy="9" r="6" fill="#FDE6D8" stroke="#E86C2C" strokeWidth="1.8" />
              <rect x="20" y="5" width="32" height="4" rx="2" fill="#18181B" />
              <rect x="20" y="12" width="18" height="3" rx="1.5" fill="#78716C" />
            </g>
            {/* Bottom CTA Pill */}
            <rect x="116" y="122" width="48" height="12" rx="6" fill="#E86C2C" />
          </g>
        </svg>
      );

    case "fleet-pwa":
      return (
        <svg aria-hidden="true" viewBox="0 0 280 165" fill="none" className="w-full h-40">
          {/* Desktop + PWA Mobile Card */}
          <rect x="44" y="26" width="156" height="102" rx="7" fill="#FFFFFF" stroke="#18181B" strokeWidth="2.2" />
          <line x1="44" y1="40" x2="200" y2="40" stroke="#18181B" strokeWidth="1.6" />
          <rect x="56" y="52" width="60" height="32" rx="4" fill="#FDF2EA" stroke="#E86C2C" strokeWidth="1.6" />
          <rect x="124" y="52" width="64" height="32" rx="4" fill="#FAF7F4" stroke="#18181B" strokeWidth="1.5" />
          <rect x="56" y="92" width="132" height="22" rx="4" fill="#18181B" />
          <circle cx="70" cy="103" r="4" fill="#E86C2C" />
          <rect x="80" y="101" width="64" height="4" rx="2" fill="#FFFFFF" />
          {/* Overlapping PWA Phone */}
          <rect x="184" y="42" width="54" height="98" rx="9" fill="#FFFFFF" stroke="#18181B" strokeWidth="2.4" />
          <rect x="192" y="56" width="38" height="26" rx="4" fill="#E86C2C" opacity="0.2" />
          <path d="M203 70L209 76L221 63" stroke="#E86C2C" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="192" y="90" width="38" height="5" rx="2" fill="#18181B" />
          <rect x="192" y="100" width="26" height="4" rx="2" fill="#78716C" />
          <rect x="192" y="116" width="38" height="12" rx="6" fill="#E86C2C" />
        </svg>
      );

    case "operations-hub":
      return (
        <svg aria-hidden="true" viewBox="0 0 280 165" fill="none" className="w-full h-40">
          <rect x="46" y="22" width="188" height="118" rx="8" fill="#FFFFFF" stroke="#18181B" strokeWidth="2.2" />
          <rect x="58" y="36" width="164" height="24" rx="4" fill="#18181B" />
          <circle cx="72" cy="48" r="5" fill="#E86C2C" />
          <rect x="84" y="46" width="56" height="4" rx="2" fill="#FFFFFF" />
          {/* Route telemetry path */}
          <path
            d="M68 106L104 82L146 98L188 72L212 84"
            stroke="#18181B"
            strokeWidth="2.2"
            strokeDasharray="4 4"
            strokeLinecap="round"
          />
          <circle cx="68" cy="106" r="5" fill="#E86C2C" stroke="#18181B" strokeWidth="1.8" />
          <circle cx="104" cy="82" r="5" fill="#FFFFFF" stroke="#18181B" strokeWidth="1.8" />
          <circle cx="146" cy="98" r="5" fill="#E86C2C" stroke="#18181B" strokeWidth="1.8" />
          <circle cx="188" cy="72" r="6" fill="#E86C2C" stroke="#18181B" strokeWidth="1.8" />
          <rect x="58" y="120" width="74" height="8" rx="4" fill="#FDF2EA" stroke="#E86C2C" strokeWidth="1.4" />
          <rect x="142" y="120" width="80" height="8" rx="4" fill="#F5F5F4" stroke="#18181B" strokeWidth="1.4" />
        </svg>
      );

    case "lineage-graph":
      return (
        <svg aria-hidden="true" viewBox="0 0 280 165" fill="none" className="w-full h-40">
          <rect x="48" y="20" width="184" height="122" rx="10" fill="#FFFFFF" stroke="#18181B" strokeWidth="2.2" />
          {/* Interactive Family Tree Nodes */}
          <line x1="140" y1="52" x2="96" y2="88" stroke="#18181B" strokeWidth="2" />
          <line x1="140" y1="52" x2="184" y2="88" stroke="#18181B" strokeWidth="2" />
          <line x1="96" y1="88" x2="76" y2="120" stroke="#E86C2C" strokeWidth="2" />
          <line x1="96" y1="88" x2="118" y2="120" stroke="#E86C2C" strokeWidth="2" />
          <line x1="184" y1="88" x2="164" y2="120" stroke="#18181B" strokeWidth="2" />
          <line x1="184" y1="88" x2="204" y2="120" stroke="#18181B" strokeWidth="2" />

          <circle cx="140" cy="46" r="12" fill="#E86C2C" stroke="#18181B" strokeWidth="2" />
          <circle cx="96" cy="86" r="10" fill="#FDF2EA" stroke="#18181B" strokeWidth="2" />
          <circle cx="184" cy="86" r="10" fill="#FFFFFF" stroke="#18181B" strokeWidth="2" />
          <circle cx="76" cy="120" r="7" fill="#FFFFFF" stroke="#E86C2C" strokeWidth="2" />
          <circle cx="118" cy="120" r="7" fill="#FFFFFF" stroke="#E86C2C" strokeWidth="2" />
          <circle cx="164" cy="120" r="7" fill="#18181B" />
          <circle cx="204" cy="120" r="7" fill="#E86C2C" stroke="#18181B" strokeWidth="1.8" />
        </svg>
      );
  }
}

export function SkillBadgeIcon({ iconKey }: { iconKey: string }) {
  switch (iconKey) {
    case "dotnet":
      return (
        <svg aria-hidden="true" viewBox="0 0 36 36" fill="none" className="w-8 h-8">
          <rect x="3" y="3" width="30" height="30" rx="6" stroke="#18181B" strokeWidth="2" />
          <text x="18" y="22.5" textAnchor="middle" fill="#18181B" fontSize="11.5" fontWeight="800" fontFamily="system-ui">
            .NET
          </text>
        </svg>
      );
    case "ts":
      return (
        <svg aria-hidden="true" viewBox="0 0 36 36" fill="none" className="w-8 h-8">
          <rect x="4" y="4" width="28" height="28" rx="5" stroke="#18181B" strokeWidth="2" />
          <text x="18" y="23" textAnchor="middle" fill="#18181B" fontSize="13" fontWeight="800" fontFamily="system-ui">
            TS
          </text>
        </svg>
      );
    case "react":
      return (
        <svg aria-hidden="true" viewBox="0 0 36 36" fill="none" className="w-8 h-8">
          <circle cx="18" cy="18" r="2.6" fill="#18181B" />
          <ellipse cx="18" cy="18" rx="14" ry="5.5" stroke="#18181B" strokeWidth="1.9" />
          <ellipse cx="18" cy="18" rx="14" ry="5.5" transform="rotate(60 18 18)" stroke="#18181B" strokeWidth="1.9" />
          <ellipse cx="18" cy="18" rx="14" ry="5.5" transform="rotate(120 18 18)" stroke="#18181B" strokeWidth="1.9" />
        </svg>
      );
    case "nextjs":
      return (
        <svg aria-hidden="true" viewBox="0 0 36 36" fill="none" className="w-8 h-8">
          <circle cx="18" cy="18" r="14" stroke="#18181B" strokeWidth="2" />
          <path d="M13 24V12L24.5 26" stroke="#18181B" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="23" y1="12" x2="23" y2="20" stroke="#18181B" strokeWidth="2.1" strokeLinecap="round" />
        </svg>
      );
    case "vue":
      return (
        <svg aria-hidden="true" viewBox="0 0 36 36" fill="none" className="w-8 h-8">
          <path d="M4 8H12.5L18 17.5L23.5 8H32L18 31L4 8Z" stroke="#18181B" strokeWidth="2" strokeLinejoin="round" />
          <path d="M11 8L18 20L25 8" stroke="#E86C2C" strokeWidth="2" strokeLinejoin="round" />
        </svg>
      );
    case "postgres":
      return (
        <svg aria-hidden="true" viewBox="0 0 36 36" fill="none" className="w-8 h-8">
          <ellipse cx="18" cy="10" rx="11" ry="4.5" stroke="#18181B" strokeWidth="2" />
          <path d="M7 10V26C7 28.5 11.9 30.5 18 30.5C24.1 30.5 29 28.5 29 26V10" stroke="#18181B" strokeWidth="2" />
          <path d="M7 18C7 20.5 11.9 22.5 18 22.5C24.1 22.5 29 20.5 29 18" stroke="#E86C2C" strokeWidth="2" />
        </svg>
      );
    case "tailwind":
      return (
        <svg aria-hidden="true" viewBox="0 0 36 36" fill="none" className="w-8 h-8">
          <path
            d="M9 15.5C10.5 11.5 13.5 9.5 18 9.5C24 9.5 25.5 14 29 14.5C27.5 18.5 24.5 20.5 20 20.5C14 20.5 12.5 16 9 15.5Z"
            stroke="#18181B"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M5 23.5C6.5 19.5 9.5 17.5 14 17.5C20 17.5 21.5 22 25 22.5C23.5 26.5 20.5 28.5 16 28.5C10 28.5 8.5 24 5 23.5Z"
            stroke="#18181B"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "flutter":
      return (
        <svg aria-hidden="true" viewBox="0 0 36 36" fill="none" className="w-8 h-8">
          <path d="M21 5L8 18L12.5 22.5L30 5H21Z" stroke="#18181B" strokeWidth="2" strokeLinejoin="round" />
          <path d="M21 17L14 24L21 31H30L23 24L30 17H21Z" stroke="#E86C2C" strokeWidth="2" strokeLinejoin="round" />
        </svg>
      );
    default:
      return (
        <svg aria-hidden="true" viewBox="0 0 36 36" fill="none" className="w-8 h-8">
          <path d="M13 12L6 18L13 24" stroke="#18181B" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M23 12L30 18L23 24" stroke="#18181B" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="20" y1="9" x2="16" y2="27" stroke="#E86C2C" strokeWidth="2.2" strokeLinecap="round" />
        </svg>
      );
  }
}

export function GitHubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export function LinkedInIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

