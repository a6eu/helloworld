import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Head from "next/head";
import Filter from "@/components/Filter";
import Catalog from "@/components/CatalogProducts";
import Pagination from "@/components/Pagination"
import { useState } from "react";

import * as React from "react";

const Product = (props) => {
  return (
    <div className="bg-neutral-100 flex flex-col items-stretch">
      

      <div className="self-center flex w-full max-w-[1112px] flex-col mt-5 px-5 max-md:max-w-full">
        <div className="flex items-start gap-3.5 self-start max-md:max-w-full max-md:flex-wrap max-md:justify-center">
          <div className="justify-center text-sky-700 text-xs font-medium tracking-wide uppercase self-center whitespace-nowrap my-auto">
            Оборудование
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/90686ff203df2b0e4961fd187c9750feb8e61d4e71f08e663e4d0714a8365d90?"
            className="aspect-[0.69] object-contain object-center w-[11px] overflow-hidden self-stretch shrink-0 max-w-full"
          />
          <div className="justify-center text-sky-700 text-xs font-medium tracking-wide">
            Серверы и серверное оборудование
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/90686ff203df2b0e4961fd187c9750feb8e61d4e71f08e663e4d0714a8365d90?"
            className="aspect-[0.69] object-contain object-center w-[11px] overflow-hidden self-stretch shrink-0 max-w-full"
          />
          <div className="justify-center text-sky-700 text-xs font-medium tracking-wide whitespace-nowrap mt-1 self-start">
            Сервер Dell PowerEdge R540 (210-ALZH-B)
          </div>
        </div>
        <div className="shadow-sm bg-white self-stretch mt-7 pl-10 pr-5 py-3.5 rounded-md max-md:max-w-full max-md:pl-5">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[31%] max-md:w-full max-md:ml-0">
              <img
                loading="lazy"
                srcSet="..."
                className="aspect-square object-contain object-center w-full overflow-hidden max-md:mt-10"
              />
            </div>
            <div className="flex flex-col items-stretch w-[69%] ml-5 max-md:w-full max-md:ml-0">
              <div className="flex flex-col my-auto max-md:max-w-full max-md:mt-10">
                <div className="self-stretch flex justify-between gap-1.5 items-start max-md:max-w-full max-md:flex-wrap max-md:justify-center">
                  <div className="text-black text-3xl font-light grow whitespace-nowrap max-md:max-w-full">
                    Сервер Dell PowerEdge R540 (210-ALZH-B)
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/c4912508933533656070388bb4df6460dd725f51a6ac92e0fd57b15bd5cbbb17?"
                    className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/b7251b6dcc8c31498c92eccfd8761d62cd23683e130f50393f779a5f0eb03d5c?"
                    className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                  />
                </div>
                <div className="flex items-stretch gap-1.5 mt-4 self-start">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/79b841d63a0094ce466ce0d95048fd2b93da676fb2bf660c5b74bb5793da85ce?"
                    className="aspect-[6.38] object-contain object-center w-[134px] overflow-hidden shrink-0 max-w-full"
                  />
                  <div className="text-neutral-400 text-xs font-light self-center grow whitespace-nowrap my-auto">
                    35 отзывов
                  </div>
                </div>
                <div className="text-black text-3xl font-light self-stretch whitespace-nowrap mt-11 max-md:max-w-full max-md:mt-10">
                  <span className="font-bold">2 091 705</span>
                  <span className=""> ₸</span>
                </div>
                <div className="text-zinc-600 text-base font-light self-stretch mt-7 max-md:max-w-full">
                  Сервер Dell/R540 12LFF/1/Xeon Gold/6230/2,1 GHz/16 Gb/H730P,
                  2Gb Cache, LP/0,1,5,6,10,50,60/1/600 Gb/SAS 2.5&quot;/10k/Nо
                  ODD/(1+1) 750W
                </div>
                <div className="self-stretch flex w-full items-stretch justify-between gap-5 mt-6 max-md:max-w-full max-md:flex-wrap">
                  <img
                    loading="lazy"
                    srcSet="..."
                    className="aspect-square object-contain object-center w-[53px] overflow-hidden shrink-0 max-w-full"
                  />
                  <div className="flex items-stretch gap-px mt-5 self-start max-md:justify-center">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/a8ecd2c7e4f9d7bed1ee0ff84dd4e8394c73adc0d245784c5f50cca5142ad537?"
                      className="aspect-[0.89] object-contain object-center w-6 overflow-hidden shrink-0 max-w-full self-start"
                    />
                    <div className="justify-center text-white text-xl font-medium whitespace-nowrap border bg-sky-700 aspect-[0.9259259259259259] items-stretch px-2 py-2 rounded border-solid border-sky-700 self-start">
                      2
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/537cf7fb373ade5937862bb43bfe75e2bb4e5b4f408539aa54e4967cf3ec8745?"
                      className="aspect-[0.93] object-contain object-center w-[25px] overflow-hidden shrink-0 max-w-full self-start"
                    />
                    <div className="justify-center text-sky-700 text-center text-xs font-medium whitespace-nowrap border grow items-stretch px-7 py-3 rounded border-solid border-sky-700 max-md:px-5">
                      В КОРЗИНУ
                    </div>
                    <div className="justify-center text-white text-center text-xs font-medium whitespace-nowrap border bg-sky-700 grow items-stretch pl-6 pr-4 py-2.5 rounded border-solid border-sky-700 max-md:pl-5">
                      КУПИТЬ В ОДИН КЛИК
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border flex items-stretch justify-between gap-5 ml-40 mt-6 pl-1 pr-3 py-1 rounded-md border-solid border-sky-700 self-start max-md:justify-center max-md:ml-2.5">
          <div className="justify-center text-white text-center text-sm font-medium whitespace-nowrap shadow-sm bg-sky-700 grow items-stretch px-3.5 py-1.5 rounded">
            ОПИСАНИЕ
          </div>
          <div className="justify-center text-sky-700 text-center text-sm font-medium self-center my-auto">
            ОТЗЫВЫ
          </div>
          <div className="justify-center text-sky-700 text-center text-sm font-medium self-center whitespace-nowrap my-auto">
            ДОСТАВКА
          </div>
        </div>
        <div className="self-stretch mt-2.5 max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[61%] max-md:w-full max-md:ml-0">
              <div className="shadow-sm bg-white flex grow flex-col items-stretch w-full pt-3.5 pb-10 px-5 rounded-md max-md:max-w-full max-md:mt-5">
                <div className="flex items-stretch justify-between gap-0 max-md:max-w-full max-md:flex-wrap">
                  <div className="text-zinc-800 text-sm items-stretch bg-white grow justify-center px-6 py-3.5 max-md:px-5">
                    Microsoft_UX_Design
                  </div>
                  <div className="text-zinc-800 text-sm items-stretch bg-white grow justify-center px-6 py-3.5 max-md:px-5">
                    Microsoft_UX_Design
                  </div>
                </div>
                <div className="flex items-stretch justify-between gap-0 max-md:max-w-full max-md:flex-wrap">
                  <div className="text-zinc-800 text-sm items-stretch bg-neutral-100 grow justify-center px-6 py-3.5 max-md:px-5">
                    Microsoft_UX_Design
                  </div>
                  <div className="text-zinc-800 text-sm items-stretch bg-neutral-100 grow justify-center px-6 py-3.5 max-md:px-5">
                    Microsoft_UX_Design
                  </div>
                </div>
                <div className="flex items-stretch justify-between gap-0 max-md:max-w-full max-md:flex-wrap">
                  <div className="text-zinc-800 text-sm items-stretch bg-white grow justify-center px-6 py-3.5 max-md:px-5">
                    Microsoft_UX_Design
                  </div>
                  <div className="text-zinc-800 text-sm items-stretch bg-white grow justify-center px-6 py-3.5 max-md:px-5">
                    Microsoft_UX_Design
                  </div>
                </div>
                <div className="flex items-stretch justify-between gap-0 max-md:max-w-full max-md:flex-wrap">
                  <div className="text-zinc-800 text-sm items-stretch bg-neutral-100 grow justify-center px-6 py-3.5 max-md:px-5">
                    Microsoft_UX_Design
                  </div>
                  <div className="text-zinc-800 text-sm items-stretch bg-neutral-100 grow justify-center px-6 py-3.5 max-md:px-5">
                    Microsoft_UX_Design
                  </div>
                </div>
                <div className="flex items-stretch justify-between gap-0 max-md:max-w-full max-md:flex-wrap">
                  <div className="text-zinc-800 text-sm items-stretch bg-white grow justify-center px-6 py-3.5 max-md:px-5">
                    Microsoft_UX_Design
                  </div>
                  <div className="text-zinc-800 text-sm items-stretch bg-white grow justify-center px-6 py-3.5 max-md:px-5">
                    Microsoft_UX_Design
                  </div>
                </div>
                <div className="flex items-stretch justify-between gap-0 max-md:max-w-full max-md:flex-wrap">
                  <div className="text-zinc-800 text-sm items-stretch bg-neutral-100 grow justify-center px-6 py-3.5 max-md:px-5">
                    Microsoft_UX_Design
                  </div>
                  <div className="text-zinc-800 text-sm items-stretch bg-neutral-100 grow justify-center px-6 py-3.5 max-md:px-5">
                    Microsoft_UX_Design
                  </div>
                </div>
                <div className="flex items-stretch justify-between gap-0 max-md:max-w-full max-md:flex-wrap">
                  <div className="text-zinc-800 text-sm items-stretch bg-white grow justify-center px-6 py-3.5 max-md:px-5">
                    Microsoft_UX_Design
                  </div>
                  <div className="text-zinc-800 text-sm items-stretch bg-white grow justify-center px-6 py-3.5 max-md:px-5">
                    Microsoft_UX_Design
                  </div>
                </div>
                <div className="flex items-stretch justify-between gap-0 max-md:max-w-full max-md:flex-wrap">
                  <div className="text-zinc-800 text-sm items-stretch bg-neutral-100 grow justify-center px-6 py-3.5 max-md:px-5">
                    Microsoft_UX_Design
                  </div>
                  <div className="text-zinc-800 text-sm items-stretch bg-neutral-100 grow justify-center px-6 py-3.5 max-md:px-5">
                    Microsoft_UX_Design
                  </div>
                </div>
                <div className="flex items-stretch justify-between gap-0 max-md:max-w-full max-md:flex-wrap">
                  <div className="text-zinc-800 text-sm items-stretch bg-white grow justify-center px-6 py-3.5 max-md:px-5">
                    Microsoft_UX_Design
                  </div>
                  <div className="text-zinc-800 text-sm items-stretch bg-white grow justify-center px-6 py-3.5 max-md:px-5">
                    Microsoft_UX_Design
                  </div>
                </div>
                <div className="flex items-stretch justify-between gap-0 max-md:max-w-full max-md:flex-wrap">
                  <div className="text-zinc-800 text-sm items-stretch bg-neutral-100 grow justify-center px-6 py-3.5 max-md:px-5">
                    Microsoft_UX_Design
                  </div>
                  <div className="text-zinc-800 text-sm items-stretch bg-neutral-100 grow justify-center px-6 py-3.5 max-md:px-5">
                    Microsoft_UX_Design
                  </div>
                </div>
                <div className="flex items-stretch justify-between gap-0 max-md:max-w-full max-md:flex-wrap">
                  <div className="text-zinc-800 text-sm items-stretch bg-white grow justify-center px-6 py-3.5 max-md:px-5">
                    Microsoft_UX_Design
                  </div>
                  <div className="text-zinc-800 text-sm items-stretch bg-white grow justify-center px-6 py-3.5 max-md:px-5">
                    Microsoft_UX_Design
                  </div>
                </div>
                <div className="flex items-stretch justify-between gap-0 max-md:max-w-full max-md:flex-wrap">
                  <div className="text-zinc-800 text-sm items-stretch bg-neutral-100 grow justify-center px-6 py-3.5 max-md:px-5">
                    Microsoft_UX_Design
                  </div>
                  <div className="text-zinc-800 text-sm items-stretch bg-neutral-100 grow justify-center px-6 py-3.5 max-md:px-5">
                    Microsoft_UX_Design
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[39%] ml-5 max-md:w-full max-md:ml-0">
              <div className="shadow-sm bg-white flex flex-col w-full pt-5 pb-11 px-5 rounded-md max-md:max-w-full max-md:mt-5">
                <img
                  loading="lazy"
                  srcSet="..."
                  className="aspect-square object-contain object-center w-[150px] overflow-hidden self-center max-w-full"
                />
                <div className="text-black text-justify text-sm font-light self-stretch mt-9">
                  {" "}
                  Корпорация Dell обеспечивает весь мир технологиями, которые
                  позволяют воплощать мечты в жизнь. Клиенты доверяют нашим
                  технологическим решениям, которые позволяют им работать более
                  эффективно, где бы они ни находились: дома, в офисе, в школе и
                  т. д. Узнайте больше о нашей истории, целях и людях, которые
                  воплощают в жизнь нашу стратегию, ориентированную на клиентов.
                </div>
                <div className="text-sky-700 text-center text-base font-light underline self-center whitespace-nowrap mt-8">
                  Все товары категории
                </div>
                <div className="text-sky-700 text-center text-base font-light underline self-center whitespace-nowrap mt-2">
                  Все товары бренда DELL
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-sky-700 text-xl font-light leading-5 uppercase self-center whitespace-nowrap mt-7">
          Вам может понравиться
        </div>
        <div className="self-stretch flex items-start justify-between gap-5 mt-7 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/76f6ffc7d605356ffca3cbed5034b20abd084ec59afbbca9dc60bdedc1c1c6b4?"
            className="aspect-[0.4] object-contain object-center w-[17px] overflow-hidden self-center shrink-0 max-w-full my-auto"
          />
          <div className="shadow-sm bg-white self-stretch flex grow basis-[0%] flex-col px-2 py-2.5 rounded-md">
            <img
              loading="lazy"
              srcSet="..."
              className="aspect-[1.07] object-contain object-center w-44 overflow-hidden self-center"
            />
            <div className="self-stretch flex justify-between gap-5 mt-2 items-start">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/03216b5fb461c2a394080baaad03a99371ee50dba5f90d84a499639b9336d16d?"
                className="aspect-[6.08] object-contain object-center w-[73px] overflow-hidden shrink-0 max-w-full"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2328096e0744706ccaf01364deec446e06cac4a67f94b0fb7931cb8d3bbdf058?"
                className="aspect-square object-contain object-center w-[15px] overflow-hidden self-stretch shrink-0 max-w-full"
              />
            </div>
            <div className="justify-center text-black text-xs font-light self-stretch mt-2">
              Microsoft Office Для дома и бизнеса 2021
              <br />
            </div>
            <div className="justify-center text-black text-base font-medium self-stretch mt-4">
              148 470 ₸
            </div>
          </div>
          <div className="shadow-sm bg-white self-stretch flex grow basis-[0%] flex-col px-2 py-2.5 rounded-md">
            <img
              loading="lazy"
              srcSet="..."
              className="aspect-[1.07] object-contain object-center w-44 overflow-hidden self-center"
            />
            <div className="self-stretch flex justify-between gap-5 mt-2 items-start">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f3b0906d5b258630793d85d1f2f2253d63c5289fb43365ff6c8fcac408c1d0a0?"
                className="aspect-[6.08] object-contain object-center w-[73px] overflow-hidden shrink-0 max-w-full"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2328096e0744706ccaf01364deec446e06cac4a67f94b0fb7931cb8d3bbdf058?"
                className="aspect-square object-contain object-center w-[15px] overflow-hidden self-stretch shrink-0 max-w-full"
              />
            </div>
            <div className="justify-center text-black text-xs font-light self-stretch mt-2">
              Microsoft Office Для дома и бизнеса 2021
              <br />
            </div>
            <div className="justify-center text-black text-base font-medium self-stretch mt-4">
              148 470 ₸
            </div>
          </div>
          <div className="shadow-sm bg-white self-stretch flex grow basis-[0%] flex-col px-2 py-2.5 rounded-md">
            <img
              loading="lazy"
              srcSet="..."
              className="aspect-[1.07] object-contain object-center w-44 overflow-hidden self-center"
            />
            <div className="self-stretch flex justify-between gap-5 mt-2 items-start">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8181fadf4eaafbb6c6a5f10fa468d6a078bc96b3d0376dcb07f91aa6b1fa4800?"
                className="aspect-[6.08] object-contain object-center w-[73px] overflow-hidden shrink-0 max-w-full"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/98933ce391c8683b96adbe79072d44d01849dcef6d9476aede143af391815340?"
                className="aspect-square object-contain object-center w-[15px] overflow-hidden self-stretch shrink-0 max-w-full"
              />
            </div>
            <div className="justify-center text-black text-xs font-light self-stretch mt-2">
              Microsoft Office Для дома и бизнеса 2021
              <br />
            </div>
            <div className="justify-center text-black text-base font-medium self-stretch mt-4">
              148 470 ₸
            </div>
          </div>
          <div className="shadow-sm bg-white self-stretch flex grow basis-[0%] flex-col px-2 py-2.5 rounded-md">
            <img
              loading="lazy"
              srcSet="..."
              className="aspect-[1.06] object-contain object-center w-[175px] overflow-hidden self-center"
            />
            <div className="self-stretch flex justify-between gap-5 mt-2 items-start">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c114f6b806bb2a2d851b609a3b745fa14907b6ed2e6c8409aeb9b089dab0e232?"
                className="aspect-[6.08] object-contain object-center w-[73px] overflow-hidden shrink-0 max-w-full"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b11a2d43e158ddc9d3c8eb17c92a45169ede4087816a7eb2f67a5cdf64e042b2?"
                className="aspect-square object-contain object-center w-[15px] overflow-hidden self-stretch shrink-0 max-w-full"
              />
            </div>
            <div className="justify-center text-black text-xs font-light self-stretch mt-2">
              Microsoft Office Для дома и бизнеса 2021
              <br />
            </div>
            <div className="justify-center text-black text-base font-medium self-stretch mt-4">
              148 470 ₸
            </div>
          </div>
          <div className="shadow-sm bg-white self-stretch flex grow basis-[0%] flex-col px-2 py-2.5 rounded-md">
            <img
              loading="lazy"
              srcSet="..."
              className="aspect-[1.07] object-contain object-center w-44 overflow-hidden self-center"
            />
            <div className="self-stretch flex justify-between gap-5 mt-2 px-px items-start">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3dbdcb0274d1ac99d57281f4a6e942c44ee1ffd37d109cd27c1381e2c73b0154?"
                className="aspect-[6.08] object-contain object-center w-[73px] overflow-hidden shrink-0 max-w-full"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7346354114583bd5bb40ec6f1ef5cf0a1d35459aa5808b3312c19101d9175082?"
                className="aspect-square object-contain object-center w-[15px] overflow-hidden self-stretch shrink-0 max-w-full"
              />
            </div>
            <div className="justify-center text-black text-xs font-light self-stretch mt-2">
              Microsoft Office Для дома и бизнеса 2021
              <br />
            </div>
            <div className="justify-center text-black text-base font-medium self-stretch mt-4">
              148 470 ₸
            </div>
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9555a8f94e52446ef757eeeabc50e3e8452adba72303c265798e618974c16e45?"
            className="aspect-[0.4] object-contain object-center w-[17px] overflow-hidden self-center shrink-0 max-w-full my-auto"
          />
        </div>
        <div className="text-sky-700 text-center text-xl font-light leading-5 uppercase self-center whitespace-nowrap mt-9">
          ПЕРСОНАЛЬНЫЕ РЕКОМЕНДАЦИИ
        </div>
        <div className="self-stretch flex items-start justify-between gap-5 mt-6 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/76f6ffc7d605356ffca3cbed5034b20abd084ec59afbbca9dc60bdedc1c1c6b4?"
            className="aspect-[0.4] object-contain object-center w-[17px] overflow-hidden self-center shrink-0 max-w-full my-auto"
          />
          <div className="shadow-sm bg-white self-stretch flex grow basis-[0%] flex-col px-2 py-2.5 rounded-md">
            <img
              loading="lazy"
              srcSet="..."
              className="aspect-[1.07] object-contain object-center w-44 overflow-hidden self-center"
            />
            <div className="self-stretch flex justify-between gap-5 mt-2 items-start">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d42e752e026b5d70a55c40cd1e66d27efc22ad1038dbfae7c4ceb65ff57351ef?"
                className="aspect-[6.08] object-contain object-center w-[73px] overflow-hidden shrink-0 max-w-full"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2328096e0744706ccaf01364deec446e06cac4a67f94b0fb7931cb8d3bbdf058?"
                className="aspect-square object-contain object-center w-[15px] overflow-hidden self-stretch shrink-0 max-w-full"
              />
            </div>
            <div className="justify-center text-black text-xs font-light self-stretch mt-2">
              Microsoft Office Для дома и бизнеса 2021
              <br />
            </div>
            <div className="justify-center text-black text-base font-medium self-stretch mt-4">
              148 470 ₸
            </div>
          </div>
          <div className="shadow-sm bg-white self-stretch flex grow basis-[0%] flex-col px-2 py-2.5 rounded-md">
            <img
              loading="lazy"
              srcSet="..."
              className="aspect-[1.07] object-contain object-center w-44 overflow-hidden self-center"
            />
            <div className="self-stretch flex justify-between gap-5 mt-2 items-start">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d9ef6725b2e3fb416f52ebb70a2c508b3ce4c3832143d2e52add602c7867f142?"
                className="aspect-[6.08] object-contain object-center w-[73px] overflow-hidden shrink-0 max-w-full"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2328096e0744706ccaf01364deec446e06cac4a67f94b0fb7931cb8d3bbdf058?"
                className="aspect-square object-contain object-center w-[15px] overflow-hidden self-stretch shrink-0 max-w-full"
              />
            </div>
            <div className="justify-center text-black text-xs font-light self-stretch mt-2">
              Microsoft Office Для дома и бизнеса 2021
              <br />
            </div>
            <div className="justify-center text-black text-base font-medium self-stretch mt-4">
              148 470 ₸
            </div>
          </div>
          <div className="shadow-sm bg-white self-stretch flex grow basis-[0%] flex-col px-2 py-2.5 rounded-md">
            <img
              loading="lazy"
              srcSet="..."
              className="aspect-[1.07] object-contain object-center w-44 overflow-hidden self-center"
            />
            <div className="self-stretch flex justify-between gap-5 mt-2 items-start">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/607baefaddeaf567903ed512224fe3feee18e733d1cafb682730c2c258876297?"
                className="aspect-[6.08] object-contain object-center w-[73px] overflow-hidden shrink-0 max-w-full"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/98933ce391c8683b96adbe79072d44d01849dcef6d9476aede143af391815340?"
                className="aspect-square object-contain object-center w-[15px] overflow-hidden self-stretch shrink-0 max-w-full"
              />
            </div>
            <div className="justify-center text-black text-xs font-light self-stretch mt-2">
              Microsoft Office Для дома и бизнеса 2021
              <br />
            </div>
            <div className="justify-center text-black text-base font-medium self-stretch mt-4">
              148 470 ₸
            </div>
          </div>
          <div className="shadow-sm bg-white self-stretch flex grow basis-[0%] flex-col px-2 py-2.5 rounded-md">
            <img
              loading="lazy"
              srcSet="..."
              className="aspect-[1.06] object-contain object-center w-[175px] overflow-hidden self-center"
            />
            <div className="self-stretch flex justify-between gap-5 mt-2 items-start">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/61f1464e6c2b136f9df55dd32a9ba4261b6b8229e3514fcca34c82f640eb7ec1?"
                className="aspect-[6.08] object-contain object-center w-[73px] overflow-hidden shrink-0 max-w-full"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b11a2d43e158ddc9d3c8eb17c92a45169ede4087816a7eb2f67a5cdf64e042b2?"
                className="aspect-square object-contain object-center w-[15px] overflow-hidden self-stretch shrink-0 max-w-full"
              />
            </div>
            <div className="justify-center text-black text-xs font-light self-stretch mt-2">
              Microsoft Office Для дома и бизнеса 2021
              <br />
            </div>
            <div className="justify-center text-black text-base font-medium self-stretch mt-4">
              148 470 ₸
            </div>
          </div>
          <div className="shadow-sm bg-white self-stretch flex grow basis-[0%] flex-col px-2 py-2.5 rounded-md">
            <img
              loading="lazy"
              srcSet="..."
              className="aspect-[1.07] object-contain object-center w-44 overflow-hidden self-center"
            />
            <div className="self-stretch flex justify-between gap-5 mt-2 px-px items-start">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4f46639430b05853b3fdb2c649523f52cba7cdb0263fd18324a795f589de990c?"
                className="aspect-[6.08] object-contain object-center w-[73px] overflow-hidden shrink-0 max-w-full"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7346354114583bd5bb40ec6f1ef5cf0a1d35459aa5808b3312c19101d9175082?"
                className="aspect-square object-contain object-center w-[15px] overflow-hidden self-stretch shrink-0 max-w-full"
              />
            </div>
            <div className="justify-center text-black text-xs font-light self-stretch mt-2">
              Microsoft Office Для дома и бизнеса 2021
              <br />
            </div>
            <div className="justify-center text-black text-base font-medium self-stretch mt-4">
              148 470 ₸
            </div>
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9555a8f94e52446ef757eeeabc50e3e8452adba72303c265798e618974c16e45?"
            className="aspect-[0.4] object-contain object-center w-[17px] overflow-hidden self-center shrink-0 max-w-full my-auto"
          />
        </div>
        
      </div>
    </div>
  );
}



export default Product
