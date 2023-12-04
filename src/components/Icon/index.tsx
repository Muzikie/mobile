import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps, IconsConfig} from './types';
import {colors} from '../../config/stylesGuides';

const icons: IconsConfig = {
  Home: [
    'M2.386 8.211c-0.236 0.184-0.386 0.469-0.386 0.789v11c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h14c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121v-11c-0.001-0.3-0.134-0.593-0.386-0.789l-9-7c-0.358-0.275-0.861-0.285-1.228 0zM16 21v-9c0-0.552-0.448-1-1-1h-6c-0.552 0-1 0.448-1 1v9h-3c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707v-10.511l8-6.222 8 6.222v10.511c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293zM10 21v-8h4v8z',
  ],
  Winners: [
    'M14.986 15.424l0.75 5.652-3.221-1.933c-0.311-0.184-0.703-0.196-1.029 0l-3.221 1.933 0.751-5.651c0.921 0.371 1.929 0.575 2.984 0.575s2.063-0.205 2.986-0.576zM15.332 12.991c-0.058 0.030-0.113 0.065-0.163 0.105-0.92 0.573-2.005 0.904-3.169 0.904-1.657 0-3.156-0.67-4.243-1.757s-1.757-2.586-1.757-4.243 0.67-3.156 1.757-4.243 2.586-1.757 4.243-1.757 3.156 0.67 4.243 1.757 1.757 2.586 1.757 4.243-0.67 3.156-1.757 4.243c-0.278 0.278-0.583 0.529-0.911 0.748zM7.14 14.355l-1.131 8.513c-0.073 0.547 0.312 1.050 0.86 1.123 0.234 0.031 0.461-0.022 0.646-0.134l4.485-2.691 4.486 2.691c0.474 0.284 1.088 0.131 1.372-0.343 0.122-0.203 0.163-0.431 0.134-0.646l-1.13-8.515c0.28-0.215 0.546-0.448 0.795-0.697 1.446-1.446 2.343-3.447 2.343-5.656s-0.897-4.21-2.343-5.657-3.448-2.343-5.657-2.343-4.21 0.897-5.657 2.343-2.343 3.448-2.343 5.657 0.897 4.21 2.343 5.657c0.25 0.25 0.516 0.483 0.796 0.698z',
  ],
  Settings: [
    'M16 12c0-1.104-0.449-2.106-1.172-2.828s-1.724-1.172-2.828-1.172-2.106 0.449-2.828 1.172-1.172 1.724-1.172 2.828 0.449 2.106 1.172 2.828 1.724 1.172 2.828 1.172 2.106-0.449 2.828-1.172 1.172-1.724 1.172-2.828zM14 12c0 0.553-0.223 1.051-0.586 1.414s-0.861 0.586-1.414 0.586-1.051-0.223-1.414-0.586-0.586-0.861-0.586-1.414 0.223-1.051 0.586-1.414 0.861-0.586 1.414-0.586 1.051 0.223 1.414 0.586 0.586 0.861 0.586 1.414zM20.315 15.404c0.046-0.105 0.112-0.191 0.192-0.257 0.112-0.092 0.251-0.146 0.403-0.147h0.090c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121-0.337-1.58-0.879-2.121-1.293-0.879-2.121-0.879h-0.159c-0.11-0.001-0.215-0.028-0.308-0.076-0.127-0.066-0.23-0.172-0.292-0.312-0.003-0.029-0.004-0.059-0.004-0.089-0.024-0.055-0.040-0.111-0.049-0.168 0.020-0.334 0.077-0.454 0.168-0.547l0.062-0.062c0.585-0.586 0.878-1.356 0.877-2.122s-0.294-1.536-0.881-2.122c-0.586-0.585-1.356-0.878-2.122-0.877s-1.536 0.294-2.12 0.879l-0.046 0.046c-0.083 0.080-0.183 0.136-0.288 0.166-0.14 0.039-0.291 0.032-0.438-0.033-0.101-0.044-0.187-0.11-0.253-0.19-0.092-0.112-0.146-0.251-0.147-0.403v-0.090c0-0.828-0.337-1.58-0.879-2.121s-1.293-0.879-2.121-0.879-1.58 0.337-2.121 0.879-0.879 1.293-0.879 2.121v0.159c-0.001 0.11-0.028 0.215-0.076 0.308-0.066 0.127-0.172 0.23-0.312 0.292-0.029 0.003-0.059 0.004-0.089 0.004-0.055 0.024-0.111 0.040-0.168 0.049-0.335-0.021-0.455-0.078-0.548-0.169l-0.062-0.062c-0.586-0.585-1.355-0.878-2.122-0.878s-1.535 0.294-2.122 0.882c-0.585 0.586-0.878 1.355-0.878 2.122s0.294 1.536 0.879 2.12l0.048 0.047c0.080 0.083 0.136 0.183 0.166 0.288 0.039 0.14 0.032 0.291-0.031 0.434-0.006 0.016-0.013 0.034-0.021 0.052-0.041 0.109-0.108 0.203-0.191 0.275-0.11 0.095-0.25 0.153-0.383 0.156h-0.090c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.294-0.879 2.122 0.337 1.58 0.879 2.121 1.293 0.879 2.121 0.879h0.159c0.11 0.001 0.215 0.028 0.308 0.076 0.128 0.067 0.233 0.174 0.296 0.321 0.024 0.055 0.040 0.111 0.049 0.168-0.020 0.334-0.077 0.454-0.168 0.547l-0.062 0.062c-0.585 0.586-0.878 1.356-0.877 2.122s0.294 1.536 0.881 2.122c0.586 0.585 1.356 0.878 2.122 0.877s1.536-0.294 2.12-0.879l0.047-0.048c0.083-0.080 0.183-0.136 0.288-0.166 0.14-0.039 0.291-0.032 0.434 0.031 0.016 0.006 0.034 0.013 0.052 0.021 0.109 0.041 0.203 0.108 0.275 0.191 0.095 0.11 0.153 0.25 0.156 0.383v0.092c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879 1.58-0.337 2.121-0.879 0.879-1.293 0.879-2.121v-0.159c0.001-0.11 0.028-0.215 0.076-0.308 0.067-0.128 0.174-0.233 0.321-0.296 0.055-0.024 0.111-0.040 0.168-0.049 0.334 0.020 0.454 0.077 0.547 0.168l0.062 0.062c0.586 0.585 1.356 0.878 2.122 0.877s1.536-0.294 2.122-0.881c0.585-0.586 0.878-1.356 0.877-2.122s-0.294-1.536-0.879-2.12l-0.048-0.047c-0.080-0.083-0.136-0.183-0.166-0.288-0.039-0.14-0.032-0.291 0.031-0.434zM18.396 9.302c-0.012-0.201-0.038-0.297-0.076-0.382v0.080c0 0.043 0.003 0.084 0.008 0.125 0.021 0.060 0.043 0.119 0.068 0.177 0.004 0.090 0.005 0.091 0.005 0.092 0.249 0.581 0.684 1.030 1.208 1.303 0.371 0.193 0.785 0.298 1.211 0.303h0.18c0.276 0 0.525 0.111 0.707 0.293s0.293 0.431 0.293 0.707-0.111 0.525-0.293 0.707-0.431 0.293-0.707 0.293h-0.090c-0.637 0.003-1.22 0.228-1.675 0.603-0.323 0.266-0.581 0.607-0.75 0.993-0.257 0.582-0.288 1.21-0.127 1.782 0.119 0.423 0.341 0.814 0.652 1.136l0.072 0.073c0.196 0.196 0.294 0.45 0.294 0.707s-0.097 0.512-0.292 0.707c-0.197 0.197-0.451 0.295-0.709 0.295s-0.512-0.097-0.707-0.292l-0.061-0.061c-0.463-0.453-1.040-0.702-1.632-0.752-0.437-0.037-0.882 0.034-1.293 0.212-0.578 0.248-1.027 0.683-1.3 1.206-0.193 0.371-0.298 0.785-0.303 1.211v0.181c0 0.276-0.111 0.525-0.293 0.707s-0.43 0.292-0.706 0.292-0.525-0.111-0.707-0.293-0.293-0.431-0.293-0.707v-0.090c-0.015-0.66-0.255-1.242-0.644-1.692-0.284-0.328-0.646-0.585-1.058-0.744-0.575-0.247-1.193-0.274-1.756-0.116-0.423 0.119-0.814 0.341-1.136 0.652l-0.073 0.072c-0.196 0.196-0.45 0.294-0.707 0.294s-0.512-0.097-0.707-0.292c-0.197-0.197-0.295-0.451-0.295-0.709s0.097-0.512 0.292-0.707l0.061-0.061c0.453-0.463 0.702-1.040 0.752-1.632 0.037-0.437-0.034-0.882-0.212-1.293-0.248-0.578-0.683-1.027-1.206-1.3-0.371-0.193-0.785-0.298-1.211-0.303l-0.18 0.001c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707 0.111-0.525 0.293-0.707 0.431-0.293 0.707-0.293h0.090c0.66-0.015 1.242-0.255 1.692-0.644 0.328-0.284 0.585-0.646 0.744-1.058 0.247-0.575 0.274-1.193 0.116-1.756-0.119-0.423-0.341-0.814-0.652-1.136l-0.073-0.073c-0.196-0.196-0.294-0.45-0.294-0.707s0.097-0.512 0.292-0.707c0.197-0.197 0.451-0.295 0.709-0.295s0.512 0.097 0.707 0.292l0.061 0.061c0.463 0.453 1.040 0.702 1.632 0.752 0.37 0.032 0.745-0.014 1.101-0.137 0.096-0.012 0.186-0.036 0.266-0.072-0.031 0.001-0.061 0.003-0.089 0.004-0.201 0.012-0.297 0.038-0.382 0.076h0.080c0.043 0 0.084-0.003 0.125-0.008 0.060-0.021 0.119-0.043 0.177-0.068 0.090-0.004 0.091-0.005 0.092-0.005 0.581-0.249 1.030-0.684 1.303-1.208 0.193-0.37 0.298-0.785 0.303-1.21v-0.181c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293 0.525 0.111 0.707 0.293 0.293 0.431 0.293 0.707v0.090c0.003 0.637 0.228 1.22 0.603 1.675 0.266 0.323 0.607 0.581 0.996 0.751 0.578 0.255 1.206 0.286 1.778 0.125 0.423-0.119 0.814-0.341 1.136-0.652l0.073-0.072c0.196-0.196 0.45-0.294 0.707-0.294s0.512 0.097 0.707 0.292c0.197 0.197 0.295 0.451 0.295 0.709s-0.097 0.512-0.292 0.707l-0.061 0.061c-0.453 0.463-0.702 1.040-0.752 1.632-0.032 0.37 0.014 0.745 0.137 1.101 0.012 0.095 0.037 0.185 0.072 0.266-0.001-0.032-0.002-0.062-0.004-0.089z',
  ],
  Profile: [
    'M21 21v-2c0-1.38-0.561-2.632-1.464-3.536s-2.156-1.464-3.536-1.464h-8c-1.38 0-2.632 0.561-3.536 1.464s-1.464 2.156-1.464 3.536v2c0 0.552 0.448 1 1 1s1-0.448 1-1v-2c0-0.829 0.335-1.577 0.879-2.121s1.292-0.879 2.121-0.879h8c0.829 0 1.577 0.335 2.121 0.879s0.879 1.292 0.879 2.121v2c0 0.552 0.448 1 1 1s1-0.448 1-1zM17 7c0-1.38-0.561-2.632-1.464-3.536s-2.156-1.464-3.536-1.464-2.632 0.561-3.536 1.464-1.464 2.156-1.464 3.536 0.561 2.632 1.464 3.536 2.156 1.464 3.536 1.464 2.632-0.561 3.536-1.464 1.464-2.156 1.464-3.536zM15 7c0 0.829-0.335 1.577-0.879 2.121s-1.292 0.879-2.121 0.879-1.577-0.335-2.121-0.879-0.879-1.292-0.879-2.121 0.335-1.577 0.879-2.121 1.292-0.879 2.121-0.879 1.577 0.335 2.121 0.879 0.879 1.292 0.879 2.121z',
  ],
  UpVote: [
    'M15.2321 7C14.4623 5.66667 12.5378 5.66667 11.768 7L5.27276 18.25C4.50296 19.5833 5.46522 21.25 7.00482 21.25H19.9952C21.5348 21.25 22.497 19.5833 21.7272 18.25L15.2321 7ZM14.366 13.5C13.9811 12.8333 13.0189 12.8333 12.634 13.5L11.3349 15.75C10.95 16.4167 11.4312 17.25 12.201 17.25H14.799C15.5688 17.25 16.05 16.4167 15.6651 15.75L14.366 13.5Z',
  ],
  Stop: [
    'M16 6H8C6.9 6 6 6.9 6 8V16C6 17.1 6.9 18 8 18H16C17.1 18 18 17.1 18 16V8C18 6.9 17.1 6 16 6Z',
  ],
  Pause: [
    'M8 6C6.896 6 6 6.896 6 8V16C6 17.104 6.896 18 8 18C9.104 18 10 17.104 10 16V8C10 6.896 9.104 6 8 6Z',
    'M15 6C13.896 6 13 6.896 13 8V16C13 17.104 13.896 18 15 18C16.104 18 17 17.104 17 16V8C17 6.896 16.104 6 15 6Z',
  ],
  Play: [
    'M10.396 18.433C13.037 15.859 17 12 17 12C17 12 13.037 8.141 10.396 5.567C10.033 5.218 9.543 5 9 5C7.896 5 7 5.896 7 7V17C7 18.104 7.896 19 9 19C9.543 19 10.033 18.782 10.396 18.433Z',
  ],
  cross: [
    'M7.29301 8.70701L12.586 14L7.29301 19.293C6.90201 19.684 6.90201 20.317 7.29301 20.707C7.68401 21.097 8.31701 21.098 8.70701 20.707L14 15.414L19.293 20.707C19.684 21.098 20.317 21.098 20.707 20.707C21.097 20.316 21.098 19.683 20.707 19.293L15.414 14L20.707 8.70701C21.098 8.31601 21.098 7.68301 20.707 7.29301C20.316 6.90301 19.683 6.90201 19.293 7.29301L14 12.586L8.70701 7.29301C8.31601 6.90201 7.68301 6.90201 7.29301 7.29301C6.90301 7.68401 6.90201 8.31701 7.29301 8.70701Z',
  ],
  link: [
    'M16 11.3333H18C18.7367 11.3333 19.402 11.6313 19.8853 12.1147C20.3687 12.598 20.6667 13.2633 20.6667 14C20.6667 14.7367 20.3687 15.402 19.8853 15.8853C19.402 16.3687 18.7367 16.6667 18 16.6667H16C15.632 16.6667 15.3333 16.9653 15.3333 17.3333C15.3333 17.7013 15.632 18 16 18H18C19.1047 18 20.1053 17.5513 20.8287 16.8287C21.552 16.106 22 15.1047 22 14C22 12.8953 21.5513 11.8947 20.8287 11.1713C20.106 10.448 19.1047 10 18 10H16C15.632 10 15.3333 10.2987 15.3333 10.6667C15.3333 11.0347 15.632 11.3333 16 11.3333ZM12 16.6667H10C9.26333 16.6667 8.598 16.3687 8.11467 15.8853C7.63133 15.402 7.33333 14.7367 7.33333 14C7.33333 13.2633 7.63133 12.598 8.11467 12.1147C8.598 11.6313 9.26333 11.3333 10 11.3333H12C12.368 11.3333 12.6667 11.0347 12.6667 10.6667C12.6667 10.2987 12.368 10 12 10H10C8.89533 10 7.89467 10.4487 7.17133 11.1713C6.448 11.894 6 12.8953 6 14C6 15.1047 6.44867 16.1053 7.17133 16.8287C7.894 17.552 8.89533 18 10 18H12C12.368 18 12.6667 17.7013 12.6667 17.3333C12.6667 16.9653 12.368 16.6667 12 16.6667ZM11.3333 14.6667H16.6667C17.0347 14.6667 17.3333 14.368 17.3333 14C17.3333 13.632 17.0347 13.3333 16.6667 13.3333H11.3333C10.9653 13.3333 10.6667 13.632 10.6667 14C10.6667 14.368 10.9653 14.6667 11.3333 14.6667Z',
  ],
  rightChev: [
    'M11.707 20.707L17.707 14.707C18.098 14.316 18.098 13.683 17.707 13.293L11.707 7.29301C11.316 6.90201 10.683 6.90201 10.293 7.29301C9.903 7.68401 9.902 8.31701 10.293 8.70701L15.586 14L10.293 19.293C9.902 19.684 9.902 20.317 10.293 20.707C10.684 21.097 11.317 21.098 11.707 20.707Z',
  ],
  leftChev: [
    'M17.707 19.293L12.414 14L17.707 8.707C18.098 8.316 18.098 7.683 17.707 7.293C17.316 6.903 16.683 6.902 16.293 7.293L10.293 13.293C9.90201 13.684 9.90201 14.317 10.293 14.707L16.293 20.707C16.684 21.098 17.317 21.098 17.707 20.707C18.097 20.316 18.098 19.683 17.707 19.293Z',
  ],
  check: [
    'M21.293 7.293L11 17.586L6.707 13.293C6.316 12.902 5.683 12.902 5.293 13.293C4.903 13.684 4.902 14.317 5.293 14.707L10.293 19.707C10.684 20.098 11.317 20.098 11.707 19.707L22.707 8.707C23.098 8.316 23.098 7.683 22.707 7.293C22.316 6.903 21.683 6.902 21.293 7.293Z',
  ],
  eye: [
    'M2.10603 13.553C1.97003 13.827 1.96003 14.156 2.10603 14.447C2.10603 14.447 2.50203 15.236 3.22603 16.29C3.67703 16.946 4.26403 17.722 4.98303 18.508C5.87703 19.487 6.98703 20.495 8.30203 21.308C9.89703 22.294 11.808 23 14 23C16.192 23 18.103 22.294 19.698 21.308C21.013 20.495 22.123 19.487 23.017 18.508C23.735 17.722 24.323 16.946 24.774 16.29C25.498 15.236 25.894 14.447 25.894 14.447C26.03 14.173 26.04 13.844 25.894 13.553C25.894 13.553 25.498 12.764 24.774 11.71C24.323 11.054 23.736 10.278 23.017 9.492C22.123 8.513 21.013 7.505 19.698 6.692C18.103 5.706 16.192 5 14 5C11.808 5 9.89703 5.706 8.30203 6.692C6.98703 7.505 5.87703 8.513 4.98303 9.492C4.26403 10.278 3.67703 11.053 3.22603 11.71C2.50203 12.764 2.10603 13.553 2.10603 13.553ZM4.14003 14C4.30303 13.719 4.54703 13.319 4.87403 12.842C5.28403 12.246 5.81403 11.546 6.45903 10.841C7.26403 9.96 8.23403 9.085 9.35303 8.393C10.703 7.559 12.254 7 14 7C15.746 7 17.297 7.559 18.646 8.393C19.765 9.085 20.735 9.96 21.54 10.841C22.184 11.546 22.715 12.246 23.125 12.842C23.453 13.319 23.697 13.718 23.859 14C23.696 14.281 23.452 14.681 23.125 15.158C22.715 15.754 22.185 16.454 21.54 17.159C20.735 18.04 19.765 18.915 18.646 19.607C17.297 20.441 15.746 21 14 21C12.254 21 10.703 20.441 9.35403 19.607C8.23503 18.915 7.26503 18.04 6.46003 17.159C5.81603 16.454 5.28503 15.754 4.87503 15.158C4.54703 14.681 4.30303 14.281 4.14003 14ZM18 14C18 12.896 17.551 11.894 16.828 11.172C16.105 10.45 15.104 10 14 10C12.896 10 11.894 10.449 11.172 11.172C10.45 11.895 10 12.896 10 14C10 15.104 10.449 16.106 11.172 16.828C11.895 17.55 12.896 18 14 18C15.104 18 16.106 17.551 16.828 16.828C17.55 16.105 18 15.104 18 14ZM16 14C16 14.553 15.777 15.051 15.414 15.414C15.051 15.777 14.553 16 14 16C13.447 16 12.949 15.777 12.586 15.414C12.223 15.051 12 14.553 12 14C12 13.447 12.223 12.949 12.586 12.586C12.949 12.223 13.447 12 14 12C14.553 12 15.051 12.223 15.414 12.586C15.777 12.949 16 13.447 16 14Z',
  ],
  eyeOff: [
    'M12.128 7.21401C12.779 7.06201 13.424 6.99301 13.988 7.00001C15.746 7.00001 17.297 7.55901 18.646 8.39301C19.765 9.08501 20.735 9.96001 21.54 10.841C22.184 11.546 22.715 12.246 23.125 12.842C23.452 13.317 23.695 13.716 23.858 13.997C23.312 14.95 22.698 15.818 22.08 16.539C21.721 16.958 21.769 17.59 22.188 17.949C22.607 18.308 23.239 18.26 23.598 17.841C24.416 16.887 25.209 15.729 25.881 14.471C26.029 14.192 26.044 13.853 25.894 13.552C25.894 13.552 25.498 12.763 24.774 11.709C24.323 11.053 23.736 10.277 23.017 9.49101C22.123 8.51201 21.013 7.50401 19.698 6.69101C18.103 5.70601 16.192 5.00001 14.012 5.00001C13.278 4.99101 12.472 5.07901 11.672 5.26601C11.134 5.39201 10.8 5.93001 10.926 6.46801C11.052 7.00601 11.59 7.34001 12.128 7.21401ZM12.027 13.442L14.558 15.973C14.376 16.034 14.186 16.067 13.995 16.074C13.482 16.092 12.965 15.915 12.561 15.538C12.157 15.161 11.944 14.658 11.926 14.145C11.918 13.907 11.951 13.669 12.027 13.441V13.442ZM7.98301 9.39701L10.536 11.95C10.102 12.641 9.90001 13.434 9.92801 14.216C9.96401 15.238 10.391 16.249 11.199 17.001C12.007 17.753 13.045 18.108 14.067 18.072C14.759 18.048 15.446 17.844 16.051 17.464L18.373 19.786C16.995 20.585 15.478 20.982 13.989 21C12.255 21 10.704 20.441 9.35501 19.607C8.23601 18.915 7.26601 18.04 6.46101 17.159C5.81701 16.454 5.28601 15.754 4.87601 15.158C4.55001 14.683 4.30601 14.285 4.14401 14.004C5.19401 12.182 6.52001 10.625 7.98501 9.39701H7.98301ZM2.29301 3.70701L6.56401 7.97801C4.83301 9.45701 3.29501 11.336 2.11901 13.527C1.97101 13.806 1.95501 14.146 2.10601 14.447C2.10601 14.447 2.50201 15.236 3.22601 16.29C3.67701 16.946 4.26401 17.722 4.98301 18.508C5.87701 19.487 6.98701 20.495 8.30201 21.308C9.89701 22.294 11.808 23 14.012 23C16.005 22.976 18.031 22.399 19.827 21.241L24.293 25.707C24.684 26.098 25.317 26.098 25.707 25.707C26.097 25.316 26.098 24.683 25.707 24.293L16.831 15.417C16.829 15.415 16.826 15.412 16.824 15.41L12.615 11.2C12.607 11.193 12.599 11.184 12.591 11.176L3.70701 2.29301C3.31601 1.90201 2.68301 1.90201 2.29301 2.29301C1.90301 2.68401 1.90201 3.31701 2.29301 3.70701Z',
  ],
  heart: [
    'M22.133 7.317C23.013 8.198 23.452 9.348 23.452 10.501C23.452 11.654 23.012 12.804 22.133 13.683L14 21.816L5.86701 13.683C4.98801 12.804 4.54901 11.654 4.54901 10.5C4.54901 9.346 4.98801 8.196 5.86701 7.317C6.74601 6.438 7.89601 5.999 9.05001 5.999C10.204 5.999 11.354 6.438 12.233 7.317L13.293 8.377C13.684 8.768 14.317 8.768 14.707 8.377L15.769 7.315C16.648 6.436 17.798 5.997 18.951 5.998C20.104 5.999 21.254 6.438 22.133 7.317ZM23.547 5.903C22.278 4.634 20.613 3.999 18.951 3.998C17.289 3.997 15.624 4.632 14.354 5.901L14 6.256L13.647 5.903C12.378 4.634 10.712 3.999 9.05001 3.999C7.38801 3.999 5.72201 4.634 4.45301 5.903C3.18401 7.172 2.54901 8.838 2.54901 10.5C2.54901 12.162 3.18401 13.828 4.45301 15.097L13.293 23.937C13.684 24.328 14.317 24.328 14.707 23.937L23.547 15.097C24.816 13.828 25.451 12.163 25.452 10.501C25.453 8.839 24.818 7.174 23.547 5.903Z',
  ],
  plus: [
    'M7 15H13V21C13 21.552 13.448 22 14 22C14.552 22 15 21.552 15 21V15H21C21.552 15 22 14.552 22 14C22 13.448 21.552 13 21 13H15V7C15 6.448 14.552 6 14 6C13.448 6 13 6.448 13 7V13H7C6.448 13 6 13.448 6 14C6 14.552 6.448 15 7 15Z',
  ],
  mic: [
    'M14 4C14.553 4 15.051 4.223 15.414 4.586C15.777 4.949 16 5.447 16 6V14C16 14.553 15.777 15.051 15.414 15.414C15.051 15.777 14.553 16 14 16C13.447 16 12.949 15.777 12.586 15.414C12.223 15.051 12 14.553 12 14V6C12 5.447 12.223 4.949 12.586 4.586C12.949 4.223 13.447 4 14 4ZM14 2C12.896 2 11.894 2.449 11.172 3.172C10.45 3.895 10 4.896 10 6V14C10 15.104 10.449 16.106 11.172 16.828C11.895 17.55 12.896 18 14 18C15.104 18 16.106 17.551 16.828 16.828C17.55 16.105 18 15.104 18 14V6C18 4.896 17.551 3.894 16.828 3.172C16.105 2.45 15.104 2 14 2ZM10 26H18C18.552 26 19 25.552 19 25C19 24.448 18.552 24 18 24H15V21.938C16.809 21.712 18.432 20.882 19.657 19.657C21.103 18.21 22 16.209 22 14V12C22 11.448 21.552 11 21 11C20.448 11 20 11.448 20 12V14C20 15.657 19.33 17.156 18.243 18.243C17.156 19.33 15.657 20 14 20C12.343 20 10.844 19.33 9.757 18.243C8.67 17.156 8 15.657 8 14V12C8 11.448 7.552 11 7 11C6.448 11 6 11.448 6 12V14C6 16.209 6.897 18.21 8.343 19.657C9.568 20.882 11.19 21.712 13 21.938V24H10C9.448 24 9 24.448 9 25C9 25.552 9.448 26 10 26Z',
  ],
  disc: [
    'M25 14C25 10.963 23.768 8.211 21.778 6.222C19.788 4.233 17.037 3 14 3C10.963 3 8.211 4.232 6.222 6.222C4.233 8.212 3 10.963 3 14C3 17.037 4.232 19.789 6.222 21.778C8.212 23.767 10.963 25 14 25C17.037 25 19.789 23.768 21.778 21.778C23.767 19.788 25 17.037 25 14ZM23 14C23 16.486 21.994 18.734 20.364 20.364C18.734 21.994 16.486 23 14 23C11.514 23 9.266 21.994 7.636 20.364C6.006 18.734 5 16.486 5 14C5 11.514 6.006 9.266 7.636 7.636C9.266 6.006 11.514 5 14 5C16.486 5 18.734 6.006 20.364 7.636C21.994 9.266 23 11.514 23 14ZM18 14C18 12.896 17.551 11.894 16.828 11.172C16.105 10.45 15.104 10 14 10C12.896 10 11.894 10.449 11.172 11.172C10.45 11.895 10 12.896 10 14C10 15.104 10.449 16.106 11.172 16.828C11.895 17.55 12.896 18 14 18C15.104 18 16.106 17.551 16.828 16.828C17.55 16.105 18 15.104 18 14ZM16 14C16 14.553 15.777 15.051 15.414 15.414C15.051 15.777 14.553 16 14 16C13.447 16 12.949 15.777 12.586 15.414C12.223 15.051 12 14.553 12 14C12 13.447 12.223 12.949 12.586 12.586C12.949 12.223 13.447 12 14 12C14.553 12 15.051 12.223 15.414 12.586C15.777 12.949 16 13.447 16 14Z',
  ],
  feather: [
    'M20.111 17.792C20.18 17.739 20.241 17.677 20.294 17.608L22.947 14.947C24.314 13.58 24.998 11.786 24.998 9.995C24.998 8.204 24.314 6.41 22.947 5.043C21.58 3.676 19.786 2.992 17.995 2.992C16.204 2.992 14.41 3.676 13.043 5.043L6.29301 11.793C6.09801 11.988 6.00001 12.244 6.00001 12.5V20.586L3.29301 23.293C2.90201 23.684 2.90201 24.317 3.29301 24.707C3.68401 25.097 4.31701 25.098 4.70701 24.707L7.41401 22H15.5C15.777 22 16.027 21.888 16.208 21.706L20.111 17.792ZM11.414 18H17.079L15.085 20H9.41401L11.414 18ZM19.073 16H13.414L18.707 10.707C19.098 10.316 19.098 9.683 18.707 9.293C18.316 8.903 17.683 8.902 17.293 9.293L8.00001 18.586V12.914L14.457 6.457C15.434 5.48 16.713 4.992 17.995 4.992C19.277 4.992 20.556 5.48 21.533 6.457C22.51 7.434 22.998 8.713 22.998 9.995C22.998 11.277 22.51 12.556 21.533 13.533L19.073 16Z',
  ],
  thumbsUp: [
    'M15 11C15 11.552 15.448 12 16 12H21.679C21.744 12.002 21.832 12.011 21.832 12.011C22.105 12.052 22.334 12.199 22.487 12.407C22.64 12.615 22.712 12.877 22.671 13.149L21.291 22.147C21.254 22.386 21.135 22.595 20.966 22.747C20.786 22.908 20.551 23.003 20.28 23H10V13.212L13.608 5.094C13.915 5.192 14.19 5.362 14.414 5.586C14.777 5.949 15 6.447 15 7V11ZM17 10V7C17 5.896 16.551 4.894 15.828 4.172C15.105 3.45 14.104 3 13 3C12.595 3 12.246 3.241 12.086 3.594L8.086 12.594C8.026 12.728 7.999 12.869 8 13V24C8 24.552 8.448 25 9 25H20.28C21.047 25.009 21.762 24.719 22.301 24.237C22.806 23.785 23.158 23.161 23.268 22.454L24.648 13.452C24.773 12.632 24.552 11.838 24.098 11.221C23.644 10.604 22.951 10.158 22.133 10.034C21.968 10.009 21.8 9.997 21.641 10H17ZM9 23H6C5.724 23 5.475 22.889 5.293 22.707C5.111 22.525 5 22.276 5 22V15C5 14.724 5.111 14.475 5.293 14.293C5.475 14.111 5.724 14 6 14H9C9.552 14 10 13.552 10 13C10 12.448 9.552 12 9 12H6C5.172 12 4.42 12.337 3.879 12.879C3.338 13.421 3 14.172 3 15V22C3 22.828 3.337 23.58 3.879 24.121C4.421 24.662 5.172 25 6 25H9C9.552 25 10 24.552 10 24C10 23.448 9.552 23 9 23Z',
  ],
  thumbsDown: [
    'M12.9999 17C12.9999 16.448 12.5519 16 11.9999 16H6.32095C6.25595 15.998 6.16795 15.989 6.16795 15.989C5.89495 15.948 5.66595 15.801 5.51295 15.593C5.35995 15.385 5.28795 15.123 5.32895 14.851L6.70895 5.85299C6.74595 5.61399 6.86495 5.40499 7.03395 5.25299C7.21295 5.09199 7.44895 4.99699 7.71995 4.99999H17.9999V14.788L14.3919 22.906C14.0849 22.808 13.8099 22.638 13.5859 22.414C13.2229 22.051 12.9999 21.553 12.9999 21V17ZM10.9999 18V21C10.9999 22.104 11.4489 23.106 12.1719 23.828C12.8949 24.55 13.8959 25 14.9999 25C15.4049 25 15.7539 24.759 15.9139 24.406L19.9139 15.406C19.9739 15.272 20.0009 15.131 19.9999 15V3.99999C19.9999 3.44799 19.5519 2.99999 18.9999 2.99999H7.71995C6.95295 2.99099 6.23795 3.28099 5.69895 3.76299C5.19395 4.21499 4.84195 4.83899 4.73195 5.54599L3.35195 14.548C3.22695 15.368 3.44795 16.162 3.90195 16.779C4.35595 17.396 5.04895 17.842 5.86695 17.966C6.03195 17.991 6.19995 18.003 6.35895 18H10.9999ZM18.9999 4.99999H21.6699C22.0309 4.99399 22.3439 5.11899 22.5819 5.33199C22.7949 5.52299 22.9459 5.78199 22.9999 6.07799V12.865C22.9629 13.205 22.7919 13.495 22.5449 13.698C22.3099 13.892 22.0079 14.004 21.6839 13.999L18.9999 14C18.4479 14 17.9999 14.448 17.9999 15C17.9999 15.552 18.4479 16 18.9999 16H21.6559C22.4659 16.012 23.2249 15.73 23.8159 15.244C24.4379 14.733 24.8749 13.993 24.9919 13.134C24.9969 13.094 24.9999 13.047 24.9999 13V5.99999C24.9999 5.95799 24.9969 5.91099 24.9909 5.86299C24.8799 5.05999 24.4859 4.35299 23.9159 3.84299C23.3159 3.30599 22.5189 2.98499 21.6699 3.00099H18.9999C18.4479 3.00099 17.9999 3.44899 17.9999 4.00099C17.9999 4.55299 18.4479 4.99999 18.9999 4.99999Z',
  ],
  Default: [
    'M16 6H8C6.9 6 6 6.9 6 8V16C6 17.1 6.9 18 8 18H16C17.1 18 18 17.1 18 16V8C18 6.9 17.1 6 16 6Z',
  ],
};

export const Icon = ({
  name,
  color = colors.light.purple,
  size = 28,
  style = {},
}: IconProps) => {
  if (!icons[name]) {
    name = 'Default';
  }

  return (
    <Svg width={size} height={size} viewBox="0 0 28 28" style={style}>
      {icons[name].map((path, index) => (
        <Path key={index} d={path} fill={color} />
      ))}
    </Svg>
  );
};

export default Icon;
