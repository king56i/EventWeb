import Swal from 'sweetalert2';
import { notification } from 'antd';
type NotificationType = 'success' | 'error' | 'info' | 'warning';
// export const SwalNotification = {
//     showNotification: (message:string, description:string, type:string) => {
//         const validTypes = ['success', 'error', 'info', 'warning'];
//         if (!validTypes.includes(type)) {
//             console.warn(`Invalid notification type: ${type}`);
//             type = 'info';
//         }
//         Swal.fire({
//             title:description,
//             text:message,
//             icon:type as 'success' | 'error' | 'info' | 'warning' | 'question'
//         });
//     },

//     handleError: (error:any) => {
//         if (error.response?.data?.errors) {
//             const errors = error.response.data.errors;
//             let errorMessage = "";
//             for (let field in errors) {
//                 errorMessage += `${errors[field].join(', ')}\n`;
//             }
//             SwalNotification.showNotification("Không thành công", errorMessage, "warning");
//         } else if (error.response?.data?.message) {
//             SwalNotification.showNotification("Không thành công", error.response.data.message, "error");
//         } else {
//             SwalNotification.showNotification("Lỗi không xác định", "Vui lòng thử lại sau", "error");
//         }
//     }
// };

export const AntNotification = {
    showNotification: (message:string, description:string, type:NotificationType) => {
        const validTypes:NotificationType[] = ['success', 'error', 'info', 'warning'];
        if (!validTypes.includes(type)) {
            console.warn(`Invalid notification type: ${type}`);
            type = 'info';
        }

        notification[type]({
            message,
            description,
            duration: 5,
        });
    },
    handleError: (error:any) => {
        if (error.response?.data?.errors) {
            const errors = error.response.data.errors;
            let errorMessage = "";
            for (let field in errors) {
                errorMessage += `${errors[field].join(', ')}\n`;
            }
            AntNotification.showNotification("Không thành công", errorMessage, "warning");
        } else if (error.response?.data?.message) {
            AntNotification.showNotification("Không thành công", error.response.data.message, "error");
        } else {
            AntNotification.showNotification("Lỗi không xác định", "Vui lòng thử lại sau", "error");
        }
    }
};
