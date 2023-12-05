import React, { useState } from "react"
import Image from "next/Image"


const EditProfile = ({ profile }) => {
    return (
        <div className="flex w-full justify-around h-full bg-white p-5  rounded-lg" >
            <form class="w-full max-w-lg">
              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                    Имя
                  </label>
                  <input class="appearance-none block w-full bg-white text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white hover:shadow-lg transition duration-500" id="grid-first-name" type="text" placeholder="Ваше имя"/>
                  <p class="text-red-500 text-xs italic">Пожалуйста, введите корректное имя</p>
                </div>
                <div class="w-full md:w-1/2 px-3">
                  <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                    Фамилия
                  </label>
                  <input class="appearance-none block w-full bg-white text-gray-700 border border-[#1075B2] rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 hover:shadow-lg transition duration-500" id="grid-last-name" type="text" placeholder="Ваша фамилия"/>
                </div>
              </div>
              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                  <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-phone">
                    Номер телефона
                  </label>
                  <input class="appearance-none block w-full bg-white text-gray-700 border border-[#1075B2] rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 hover:shadow-lg transition duration-500" id="grid-phone" type="text" placeholder="+7 *** *** ** **"/>
                </div>
              </div>
              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                  <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                    Пароль
                  </label>
                  <input class="appearance-none block w-full bg-white text-gray-700 border border-[#1075B2] rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 hover:shadow-lg transition duration-500" id="grid-password" type="password" placeholder="******************"/>
                  <p class="text-gray-600 text-xs italic">Чем сложнее, тем лучше</p>
                </div>
              </div>
              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                  <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-birthday">
                    День рождения
                  </label>
                  <input class="appearance-none block w-full bg-white text-gray-700 border border-[#1075B2] rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 hover:shadow-lg transition duration-500" id="grid-birthday" type="date" placeholder="дд.мм.гггг"/>
                </div>
              </div>
              <div class="flex flex-wrap -mx-3 mb-2">
                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                    Адрес
                  </label>
                  <input class="appearance-none mb-6 block w-full bg-white text-gray-700 border border-[#1075B2] rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 hover:shadow-lg transition duration-500" id="grid-city" type="text" placeholder="Ваш адрес"/>
                </div>
                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                    Город
                  </label>
                  <div class="relative">
                    <select class="block appearance-none w-full bg-white border border-[#1075B2] text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 hover:shadow-lg transition duration-500" id="grid-state">
                      <option>Астана</option>
                      <option>Алматы</option>
                      <option>Шымкент</option>
                    </select>
                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                  </div>
                </div>
                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                    Zip
                  </label>
                  <input class="appearance-none block w-full bg-white text-gray-700 border border-[#1075B2] rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 hover:shadow-lg transition duration-500" id="grid-zip" type="text" placeholder="90210"/>
                </div>
              </div>
              <div class="flex flex-wrap justify-end">
                <button class="bg-white border text-[#1075B2] border-[#1075B2] rounded-lg p-2 px-5 mr-5 hover:shadow-lg transition duration-500" type="button" value="Отмена">Отмена</button>
                <input type="submit" class="bg-[#1075B2] rounded-lg p-2 px-5 text-white hover:shadow-xl transition duration-500" value="Сохранить"/>
              </div>
            </form>
        </div>
    )
}

export default EditProfile