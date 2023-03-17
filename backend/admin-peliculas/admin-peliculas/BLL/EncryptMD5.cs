using System.Security.Cryptography;
using System.Text;

namespace admin_peliculas.BLL
{
    public class EncryptMD5
    {

       public string Encrypt(string message)
        {
            string hash = "System hash";
            byte[] data = UTF8Encoding.UTF8.GetBytes(message);

            MD5 md5 = MD5.Create();
            TripleDES tripleDES = TripleDES.Create();

            tripleDES.Key= md5.ComputeHash(UTF8Encoding.UTF8.GetBytes(hash));
            tripleDES.Mode= CipherMode.ECB;


            // factory ?
            ICryptoTransform transform = tripleDES.CreateEncryptor();
            byte[] result = transform.TransformFinalBlock(data, 0, data.Length);

            return Convert.ToBase64String(result);


        }

        public string DeCrypt(string encryptedMessage)
        {
            string hash = "System hash";
            byte[] data = Convert.FromBase64String(encryptedMessage);

            MD5 md5 = MD5.Create();
            TripleDES tripleDES = TripleDES.Create();

            tripleDES.Key = md5.ComputeHash(UTF8Encoding.UTF8.GetBytes(hash));
            tripleDES.Mode = CipherMode.ECB;


            ICryptoTransform transform = tripleDES.CreateDecryptor();
            byte[] result = transform.TransformFinalBlock(data, 0, data.Length);

            return UTF8Encoding.UTF8.GetString(result);
        }

        public bool CheckEncrypted(string message,string encryptedMessage)
        {
           return message == DeCrypt(encryptedMessage)? true : false;
            
        }

        

    }
}
