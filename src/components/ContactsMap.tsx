"use client";

import { cn } from "@/shared/lib/utils";
import {
  YMaps,
  Map,
  ZoomControl,
  //   TypeSelector,
  Placemark,
} from "@r3flector/react-yandex-maps";
/* eslint-disable @typescript-eslint/no-unused-expressions */

const ContactsMap = ({ className }: { className?: string }) => {
  return (
    <div className="rounded-[8px] overflow-hidden w-full">
      <YMaps>
        <Map
          instanceRef={(ref) => {
            ref && ref.behaviors.disable("scrollZoom");
          }}
          defaultState={{
            center: [45.016485318057406, 38.95953056745904],
            zoom: 18,
          }}
          //   "h-[376px] w-full max-lg:h-[296px] max-md:h-[460px]"
          className={cn(className)}
        >
          <Placemark
            geometry={[45.016485318057406, 38.95953056745904]}
            options={{
              iconLayout: "default#image",

              iconImageHref: "/placemark.svg",
            }}
          />
          <ZoomControl />
        </Map>
      </YMaps>
    </div>
  );
};

export { ContactsMap };
